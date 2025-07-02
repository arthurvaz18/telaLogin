package com.sonner.login.serviceImpl;

import com.sonner.login.model.Estabelecimento;
import com.sonner.login.repository.EstabelecimentoRepository;
import com.sonner.login.service.EstabelecimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.security.sasl.AuthenticationException;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;
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
    public Estabelecimento atualizarEstabelecimento(String email, String senha, Estabelecimento estabelecimentoAtualizado) {
        Estabelecimento estabelecimentoExistente = estabelecimentoRepository.findByEmailAndSenha(email, senha)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado"));

        estabelecimentoExistente.setEmail(estabelecimentoAtualizado.getEmail());
        estabelecimentoExistente.setNome(estabelecimentoAtualizado.getNome());
        estabelecimentoExistente.setSenha(estabelecimentoAtualizado.getSenha());
        estabelecimentoExistente.setPais(estabelecimentoAtualizado.getPais());
        estabelecimentoExistente.setEstado(estabelecimentoAtualizado.getEstado());
        estabelecimentoExistente.setCep(estabelecimentoAtualizado.getCep());
        estabelecimentoExistente.setCidade(estabelecimentoAtualizado.getCidade());
        estabelecimentoExistente.setEndereco(estabelecimentoAtualizado.getEndereco());
        estabelecimentoExistente.setComplemento(estabelecimentoAtualizado.getComplemento());
        estabelecimentoExistente.setTelefone(estabelecimentoAtualizado.getTelefone());

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
        } else if(nome != null){
           return estabelecimentoRepository.findByNome(nome);
        } else if (cnpj != null) {
            return estabelecimentoRepository.findByCnpj(cnpj);
        } else if (telefone != null) {
           return estabelecimentoRepository.findByTelefone(telefone);
        }
        return estabelecimentoRepository.findAll();
    }

    @Override
    public ResponseEntity<?> logarEstabelecimento(Map<String, String> login) {
        String email = login.get("email");
        String senha = login.get("senha");

        Estabelecimento estabelecimento = estabelecimentoRepository.findByEmailAndSenha(email, senha).orElse(null);

        if (estabelecimento != null) {
            return ResponseEntity.ok(estabelecimento);
        } else {
            return ResponseEntity.status(401).body("Email ou senha inválidos");
        }
    }

    @Override
    public Optional<Estabelecimento> buscarEstabelecimentoPorEmail(String email) {
        return estabelecimentoRepository.findByEmail(email);
    }

}
