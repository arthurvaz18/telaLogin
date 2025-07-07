package com.sonner.login.service;

import com.sonner.login.model.Evento;
import com.sonner.login.model.enums.TipoEventoEnum;

import java.util.List;
import java.util.UUID;

public interface EventoService {
    Evento criarEvento(Evento evento);
    Evento buscarEvento(UUID id);
    Evento editarEvento(Evento evento);
    void deletarEvento(UUID id);
    List<Evento> listarEventos(TipoEventoEnum tipoEventoEnum);
    List<Evento> listarTodosEventos();
}
