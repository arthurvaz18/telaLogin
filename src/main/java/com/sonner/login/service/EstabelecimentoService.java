package com.sonner.login.service;

import com.sonner.login.model.Estabelecimento;

import java.util.List;

public interface EstabelecimentoService {
    Estabelecimento criarEstabelecimento(Estabelecimento usuario);
    Estabelecimento buscarEstabelecimento(Integer id);
    Estabelecimento atualizarEstabelecimento(Integer id, Estabelecimento usuario);
    Estabelecimento deletarEstabelecimento(Integer id);
    List<Estabelecimento> listarEstabelecimento(String cnpj, String nome, String email, String telefone);
}
