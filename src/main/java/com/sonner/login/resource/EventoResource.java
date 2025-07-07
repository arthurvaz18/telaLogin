package com.sonner.login.resource;

import com.sonner.login.model.Evento;
import com.sonner.login.model.enums.TipoEventoEnum;
import com.sonner.login.service.EventoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/eventos")
@CrossOrigin(origins = "http://localhost:4200")
public class EventoResource {

    private final EventoService eventoService;

    public EventoResource(EventoService eventoService) {
        this.eventoService = eventoService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Evento> criarEvento(@RequestBody Evento evento) {
        Evento novoEvento = eventoService.criarEvento(evento);
        return ResponseEntity.ok(novoEvento);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Evento> buscarEvento(@PathVariable UUID id) {
        Evento evento = eventoService.buscarEvento(id);
        return ResponseEntity.ok(evento);
    }

    @PutMapping
    public ResponseEntity<Evento> editarEvento(@RequestBody Evento evento) {
        Evento atualizado = eventoService.editarEvento(evento);
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarEvento(@PathVariable UUID id) {
        eventoService.deletarEvento(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Evento>> listarTodos() {
        return ResponseEntity.ok(eventoService.listarTodosEventos());
    }

    @GetMapping("/tipo/{tipo}")
    public ResponseEntity<List<Evento>> listarPorTipo(@PathVariable TipoEventoEnum tipo) {
        return ResponseEntity.ok(eventoService.listarEventos(tipo));
    }
}
