package com.sonner.login.serviceImpl;

import com.sonner.login.model.Estabelecimento;
import com.sonner.login.repository.EstabelecimentoRepository;
import com.sonner.login.service.EstabelecimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class EstabelecimentoServiceImpl implements EstabelecimentoService {

    @Autowired
    EstabelecimentoRepository estabelecimentoRepository;

    public EstabelecimentoServiceImpl(EstabelecimentoRepository repository) {
        this.estabelecimentoRepository = repository;
    }

    @Override
    public Estabelecimento criarEstabelecimento(Estabelecimento estabelecimento) {
        return estabelecimentoRepository.save(estabelecimento);
    }

    @Override
    public Estabelecimento buscarEstabelecimento(Integer id) {
        return estabelecimentoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    @Override
    public Estabelecimento atualizarEstabelecimento(Integer id, Estabelecimento estabelecimento) {
        Optional<Estabelecimento> estabelecimentoOptional = estabelecimentoRepository.findById(id);
        if (!estabelecimentoOptional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado");
        }
        Estabelecimento estabelecimentoExistente = estabelecimentoOptional.get();
        estabelecimentoExistente.setEmail(estabelecimento.getEmail());
        estabelecimentoExistente.setNome(estabelecimento.getNome());
        estabelecimentoExistente.setNome(estabelecimento.getNome());
        estabelecimentoExistente.setTelefone(estabelecimento.getTelefone());
        estabelecimentoExistente.setDataAtualizacao(estabelecimento.getDataAtualizacao());
        estabelecimentoExistente.setDataCriacao(estabelecimento.getDataCriacao());
        estabelecimentoExistente.setCidade(estabelecimento.getCidade());
        estabelecimentoExistente.setEstado(estabelecimento.getEstado());
        return estabelecimentoRepository.save(estabelecimentoExistente);
    }

    @Override
    public Estabelecimento deletarEstabelecimento(Integer id) {
        Optional<Estabelecimento> estabelecimentoOptional = estabelecimentoRepository.findById(id);
        if (!estabelecimentoOptional.isPresent()) {
            throw new ResponseStatusException
                    (HttpStatus.NOT_FOUND,
                            "Usuário não pode ser deletado pois não existe usuário com este " + id);
        }
        Estabelecimento estabelecimentoExistente = estabelecimentoOptional.get();
        estabelecimentoRepository.delete(estabelecimentoExistente);
        return estabelecimentoExistente;
    }

    @Override
    public List<Estabelecimento> listarEstabelecimento(String cnpj, String nome, String email, String telefone) {
        if(cnpj != null && nome !=null && email !=null && telefone !=null){
           return estabelecimentoRepository.findByCnpjAndNomeAndEmailAndTelefone(cnpj, nome, email, telefone);
        }else if(nome != null){
           return estabelecimentoRepository.findByNome(nome);
        } else if (email != null) {
           return estabelecimentoRepository.findByEmail(email);
        } else if (cnpj != null) {
            return estabelecimentoRepository.findByCnpj(cnpj);
        } else if (telefone != null) {
           return estabelecimentoRepository.findByTelefone(telefone);
        }
        return estabelecimentoRepository.findAll();
    }
}
