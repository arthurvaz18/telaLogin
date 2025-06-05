package com.sonner.login.repository.EstabelcimentoListQueryBuilder;

import com.sonner.login.model.Estabelecimento;
import com.sonner.login.vo.EstabelecimentoFilterVO;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


public class EstabelecimentoListQueryBuilder implements Specification<Estabelecimento>, Serializable {

    private final EstabelecimentoFilterVO estabelecimentoFilterVO;

    public EstabelecimentoListQueryBuilder(EstabelecimentoFilterVO estabelecimentoFilterVO) {
        this.estabelecimentoFilterVO = estabelecimentoFilterVO;
    }

    @Override
    public Predicate toPredicate(Root<Estabelecimento> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
        List<Predicate> condicoes = new ArrayList<>();

        if (estabelecimentoFilterVO == null) {
            return cb.conjunction(); // Sem filtros
        }

        // --- Filtros de Texto e Outros Campos ---

        if (StringUtils.hasText(estabelecimentoFilterVO.getNome())) {
            condicoes.add(cb.like(cb.lower(root.get("nome")), "%" + estabelecimentoFilterVO.getNome().toLowerCase() + "%"));
        }

        if (StringUtils.hasText(estabelecimentoFilterVO.getCnpj())) {
            String cnpjLimpo = estabelecimentoFilterVO.getCnpj().replaceAll("[^0-9]", "");
            if (StringUtils.hasText(cnpjLimpo)) {
                condicoes.add(cb.equal(root.get("cnpj"), cnpjLimpo));
            }
        }

        if (StringUtils.hasText(estabelecimentoFilterVO.getEmail())) {
            condicoes.add(cb.like(cb.lower(root.get("email")), "%" + estabelecimentoFilterVO.getEmail().toLowerCase() + "%"));
        }

        if (StringUtils.hasText(estabelecimentoFilterVO.getPais())) {
            condicoes.add(cb.equal(cb.lower(root.get("pais")), estabelecimentoFilterVO.getPais().toLowerCase()));
        }

        if (StringUtils.hasText(estabelecimentoFilterVO.getEstado())) {
            condicoes.add(cb.equal(cb.lower(root.get("estado")), estabelecimentoFilterVO.getEstado().toLowerCase()));
        }

        if (StringUtils.hasText(estabelecimentoFilterVO.getCidade())) {
            condicoes.add(cb.like(cb.lower(root.get("cidade")), "%" + estabelecimentoFilterVO.getCidade().toLowerCase() + "%"));
        }

        if (StringUtils.hasText(estabelecimentoFilterVO.getCep())) {
            String cepLimpo = estabelecimentoFilterVO.getCep().replaceAll("[^0-9]", "");
            if (StringUtils.hasText(cepLimpo)) {
                condicoes.add(cb.equal(root.get("cep"), cepLimpo));
            }
        }

        if (StringUtils.hasText(estabelecimentoFilterVO.getTelefone())) {
            String telefoneLimpo = estabelecimentoFilterVO.getTelefone().replaceAll("[^0-9]", "");
            if (StringUtils.hasText(telefoneLimpo)) {
                condicoes.add(cb.like(root.get("telefone"), "%" + telefoneLimpo + "%"));
            }
        }

        // --- Filtros de Endereço ---
        // Verifique se os nomes dos campos em root.get() correspondem à sua Entidade Estabelecimento
        // Ex: root.get("ruaEndereco"), root.get("endereco")

        if (StringUtils.hasText(estabelecimentoFilterVO.getEndereco())) { // Campo 'endereco' do VO (ex: nome da rua)
            condicoes.add(cb.like(cb.lower(root.get("ruaEndereco")), "%" + estabelecimentoFilterVO.getEndereco().toLowerCase() + "%"));
        }

        if (StringUtils.hasText(estabelecimentoFilterVO.getBairro())) { // Campo 'bairro' do VO
            condicoes.add(cb.like(cb.lower(root.get("endereco")), "%" + estabelecimentoFilterVO.getBairro().toLowerCase() + "%")); // Supondo que 'endereco' na entidade guarde o bairro
        }

        if (StringUtils.hasText(estabelecimentoFilterVO.getComplemento())) { // Campo 'complemento' do VO
            // Decida em qual campo da entidade buscar o complemento. Ex: 'ruaEndereco' ou um campo específico.
            condicoes.add(cb.like(cb.lower(root.get("ruaEndereco")), "%" + estabelecimentoFilterVO.getComplemento().toLowerCase() + "%"));
        }

        // --- Filtros de Data (para um dia específico) ---
        // Se o FilterVO tem 'LocalDate dataCriacao', buscamos registros criados naquele dia.

        if (estabelecimentoFilterVO.getDataCriacao() != null) {
            LocalDate diaCriacao = estabelecimentoFilterVO.getDataCriacao();
            LocalDateTime inicioDoDiaCriacao = diaCriacao.atStartOfDay(); // Ex: 2024-06-05T00:00:00
            LocalDateTime fimDoDiaCriacao = diaCriacao.atTime(23, 59, 59, 999999999); // Ex: 2024-06-05T23:59:59.999999999

            // Condição: dataCriacao (da entidade) DEVE ESTAR ENTRE o início e o fim do dia informado.
            condicoes.add(cb.between(root.get("dataCriacao"), inicioDoDiaCriacao, fimDoDiaCriacao));
            // Alternativamente, se 'between' não funcionar como esperado ou para clareza:
            // condicoes.add(cb.greaterThanOrEqualTo(root.get("dataCriacao"), inicioDoDiaCriacao));
            // condicoes.add(cb.lessThanOrEqualTo(root.get("dataCriacao"), fimDoDiaCriacao));
        }

        if (estabelecimentoFilterVO.getDataAtualizacao() != null) {
            LocalDate diaAtualizacao = estabelecimentoFilterVO.getDataAtualizacao();
            LocalDateTime inicioDoDiaAtualizacao = diaAtualizacao.atStartOfDay();
            LocalDateTime fimDoDiaAtualizacao = diaAtualizacao.atTime(23, 59, 59, 999999999);

            // Condição: dataAtualizacao (da entidade) DEVE ESTAR ENTRE o início e o fim do dia informado.
            condicoes.add(cb.between(root.get("dataAtualizacao"), inicioDoDiaAtualizacao, fimDoDiaAtualizacao));
        }

        // Filtro por ID (se informado)
        if (estabelecimentoFilterVO.getId() != null) {
            condicoes.add(cb.equal(root.get("id"), estabelecimentoFilterVO.getId()));
        }

        return cb.and(condicoes.toArray(new Predicate[0]));
    }
}

