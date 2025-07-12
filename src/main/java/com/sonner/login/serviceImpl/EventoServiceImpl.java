package com.sonner.login.serviceImpl;

import com.sonner.login.model.Estabelecimento;
import com.sonner.login.model.Evento;
import com.sonner.login.model.enums.TipoEventoEnum;
import com.sonner.login.repository.EstabelecimentoRepository;
import com.sonner.login.repository.EventoRepository;
import com.sonner.login.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Id;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Service
public class EventoServiceImpl implements EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    @Autowired
    private EstabelecimentoRepository estabelecimentoRepository;

    public EventoServiceImpl(EventoRepository eventoRepository, EstabelecimentoRepository estabelecimentoRepository) {
        this.eventoRepository = eventoRepository;
        this.estabelecimentoRepository = estabelecimentoRepository;
    }

    @Override
    public Evento criarEvento(Evento evento, String emailLogado) {
        // Busca o estabelecimento pelo email do usuário logado
        Estabelecimento estabelecimento = estabelecimentoRepository.findByEmail(emailLogado)
                .orElseThrow(() -> new RuntimeException("Estabelecimento não encontrado para o usuário logado"));

        // Associa o estabelecimento encontrado no evento
        evento.setEstabelecimento(estabelecimento);

        // Agora salva o evento com o estabelecimento correto
        return eventoRepository.save(evento);
    }

    @Override
    public Evento buscarEvento(Integer id) {
        return eventoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Evento não encontrado"));
    }

    @Override
    public Evento editarEvento(Evento eventoAtualizado) {
        Integer id = eventoAtualizado.getId();
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
    public void deletarEvento(Integer id) {
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

    @Override
    public List<Evento> listarEventosPorEstabelecimento(String emailLogado) {
        Estabelecimento emailEstabelecimento = estabelecimentoRepository.findByEmail(emailLogado)
                .orElseThrow(()-> new RuntimeException("Estabelecimento inexistente"));
        return eventoRepository.findByEstabelecimentoId(emailEstabelecimento.getId());
    }

}
