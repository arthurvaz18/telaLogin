package com.sonner.login.repository;

import com.sonner.login.model.Estabelecimento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EstabelecimentoRepository extends JpaRepository<Estabelecimento, Integer> {
    List<Estabelecimento> findByCnpj(String cnpj);
    List<Estabelecimento> findByNome(String nome);
    List<Estabelecimento> findByEmail(String email);
    List<Estabelecimento> findByTelefone(String telefone);
    List<Estabelecimento> findByCnpjAndNomeAndEmailAndTelefone(String cnpj, String nome, String email, String telefone);
}
