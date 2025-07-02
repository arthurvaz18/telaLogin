package com.sonner.login.service;

import com.sonner.login.model.Estabelecimento;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface EstabelecimentoService {
    Estabelecimento criarEstabelecimento(Estabelecimento usuario);
    Estabelecimento buscarEstabelecimento(Integer id);
    Estabelecimento atualizarEstabelecimento(String email, String senha, Estabelecimento estabelecimento);
    Estabelecimento deletarEstabelecimento(Integer id);
    List<Estabelecimento> listarEstabelecimento(String cnpj, String nome, String email, String telefone);
    ResponseEntity<?> logarEstabelecimento(Map<String, String> login);
    Optional<Estabelecimento> buscarEstabelecimentoPorEmail(String email);
}
