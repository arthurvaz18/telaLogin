package com.sonner.login.serviceImpl;

import com.sonner.login.model.Evento;
import com.sonner.login.model.enums.TipoEventoEnum;
import com.sonner.login.repository.EventoRepository;
import com.sonner.login.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EventoServiceImpl implements EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    public EventoServiceImpl(EventoRepository eventoRepository) {
        this.eventoRepository = eventoRepository;
    }

    @Override
    public Evento criarEvento(Evento evento) {
        return eventoRepository.save(evento);
    }

    @Override
    public Evento buscarEvento(UUID id) {
        return eventoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Evento não encontrado"));
    }

    @Override
    public Evento editarEvento(Evento eventoAtualizado) {
        UUID id = eventoAtualizado.getId();
        Evento eventoExistente = eventoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Evento não encontrado"));

        eventoExistente.setTitulo(eventoAtualizado.getTitulo());
        eventoExistente.setDescricao(eventoAtualizado.getDescricao());
        eventoExistente.setAtracao(eventoAtualizado.getAtracao());
        eventoExistente.setDataHoraInicio(eventoAtualizado.getDataHoraInicio());
        eventoExistente.setDataHoraFim(eventoAtualizado.getDataHoraFim());
        eventoExistente.setDiaSemanaInicio(eventoAtualizado.getDiaSemanaInicio());
        eventoExistente.setImagem(eventoAtualizado.getImagem());
        eventoExistente.setLotacaoPessoa(eventoAtualizado.getLotacaoPessoa());
        eventoExistente.setTipoEventoEnum(eventoAtualizado.getTipoEventoEnum());
        eventoExistente.setGeneroMusicalEnum(eventoAtualizado.getGeneroMusicalEnum());
        eventoExistente.setStatusEventoEnum(eventoAtualizado.getStatusEventoEnum());
        eventoExistente.setEstabelecimento(eventoAtualizado.getEstabelecimento());

        return eventoRepository.save(eventoExistente);
    }

    @Override
    public void deletarEvento(UUID id) {
        Evento evento = eventoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Evento não encontrado"));
        eventoRepository.delete(evento);
    }

    @Override
    public List<Evento> listarEventos(TipoEventoEnum tipoEventoEnum) {
        return eventoRepository.findByTipoEventoEnum(tipoEventoEnum);
    }

    @Override
    public List<Evento> listarTodosEventos() {
        return eventoRepository.findAll();
    }
}
