package com.sonner.login.serviceImpl;

import com.sonner.login.model.Estabelecimento;
import com.sonner.login.repository.EstabelecimentoRepository;
import com.sonner.login.security.PasswordEncoderConfig;
import com.sonner.login.service.EstabelecimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    private EstabelecimentoRepository estabelecimentoRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public EstabelecimentoServiceImpl(EstabelecimentoRepository estabelecimentoRepository, PasswordEncoder passwordEncoder) {
        this.estabelecimentoRepository = estabelecimentoRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Estabelecimento criarEstabelecimento(Estabelecimento estabelecimento) {
        String senhaCriptografada = passwordEncoder.encode(estabelecimento.getSenha());
        estabelecimento.setSenha(senhaCriptografada);
        return estabelecimentoRepository.save(estabelecimento);
    }

    @Override
    public Estabelecimento buscarEstabelecimento(Integer id) {
        return estabelecimentoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    @Override
    public Estabelecimento atualizarEstabelecimento(String email, String senha, Estabelecimento estabelecimentoAtualizado) {
        Estabelecimento estabelecimentoExistente = estabelecimentoRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado"));

        if (!passwordEncoder.matches(senha, estabelecimentoExistente.getSenha())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Senha inválida");
        }

        estabelecimentoExistente.setEmail(estabelecimentoAtualizado.getEmail());
        estabelecimentoExistente.setNome(estabelecimentoAtualizado.getNome());
        estabelecimentoExistente.setPais(estabelecimentoAtualizado.getPais());
        estabelecimentoExistente.setEstado(estabelecimentoAtualizado.getEstado());
        estabelecimentoExistente.setCep(estabelecimentoAtualizado.getCep());
        estabelecimentoExistente.setCidade(estabelecimentoAtualizado.getCidade());
        estabelecimentoExistente.setEndereco(estabelecimentoAtualizado.getEndereco());
        estabelecimentoExistente.setComplemento(estabelecimentoAtualizado.getComplemento());
        estabelecimentoExistente.setTelefone(estabelecimentoAtualizado.getTelefone());
        estabelecimentoExistente.setStatusEstabelecimento(estabelecimentoAtualizado.getStatusEstabelecimento());
        estabelecimentoExistente.setTipoEstabelecimentoEnum(estabelecimentoAtualizado.getTipoEstabelecimentoEnum());
        estabelecimentoExistente.setDescricaoEstabelecimento(estabelecimentoAtualizado.getDescricaoEstabelecimento());
        estabelecimentoExistente.setDiaSemanaInicio(estabelecimentoAtualizado.getDiaSemanaInicio());
        estabelecimentoExistente.setDiaSemanaFim(estabelecimentoAtualizado.getDiaSemanaFim());
        estabelecimentoExistente.setHoraAbertura(estabelecimentoAtualizado.getHoraAbertura());
        estabelecimentoExistente.setHoraFechamento(estabelecimentoAtualizado.getHoraFechamento());


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
    public Optional<Estabelecimento> buscarEstabelecimentoPorEmail(String email) {
        return estabelecimentoRepository.findByEmail(email);
    }

    @Override
    public Optional<Estabelecimento> autenticar(String email, String senha) {
        Optional<Estabelecimento> est = estabelecimentoRepository.findByEmail(email);
        if (est.isPresent() && passwordEncoder.matches(senha, est.get().getSenha())) {
            return est;
        }
        return Optional.empty();
    }
}
