package com.sonner.login.repository;

import com.sonner.login.model.Evento;
import com.sonner.login.model.enums.TipoEventoEnum;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface EventoRepository extends JpaRepository<Evento, UUID> {
    List<Evento> findByTipoEventoEnum(TipoEventoEnum tipoEventoEnum);
}
