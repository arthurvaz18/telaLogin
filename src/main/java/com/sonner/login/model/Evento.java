package com.sonner.login.model;

import com.sonner.login.model.enums.DiaSemanaEnum;
import com.sonner.login.model.enums.GeneroMusicalEnum;
import com.sonner.login.model.enums.StatusEventoEnum;
import com.sonner.login.model.enums.TipoEventoEnum;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "evento")
@EntityListeners(AuditingEntityListener.class)
public class Evento {
    @Id
    @GeneratedValue
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column(length = 255)
    private String titulo;

    @Column(length = 1000)
    private String descricao;

    @Column(length = 255)
    private String atracao;

    @CreatedDate
    @Column(updatable = false)
    private LocalDate dataCriacao;

    @LastModifiedDate
    private LocalDate dataAtualizacao;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "data_hora_inicio")
    private Date dataHoraInicio;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "data_hora_fim")
    private Date dataHoraFim;

    @Enumerated(EnumType.STRING)
    private DiaSemanaEnum diaSemanaInicio;

    @Column(length = 500)
    private String imagem;

    private Integer lotacaoPessoa;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "estabelecimento_id")
    private Estabelecimento estabelecimento;

    @Enumerated(EnumType.STRING)
    private TipoEventoEnum tipoEventoEnum;

    @Enumerated(EnumType.STRING)
    private GeneroMusicalEnum generoMusicalEnum;

    @Enumerated(EnumType.STRING)
    private StatusEventoEnum statusEventoEnum;

    public Evento() {
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getAtracao() {
        return atracao;
    }

    public void setAtracao(String atracao) {
        this.atracao = atracao;
    }

    public LocalDate getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDate dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public LocalDate getDataAtualizacao() {
        return dataAtualizacao;
    }

    public void setDataAtualizacao(LocalDate dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    }

    public Date getDataHoraInicio() {
        return dataHoraInicio;
    }

    public void setDataHoraInicio(Date dataHoraInicio) {
        this.dataHoraInicio = dataHoraInicio;
    }

    public Date getDataHoraFim() {
        return dataHoraFim;
    }

    public void setDataHoraFim(Date dataHoraFim) {
        this.dataHoraFim = dataHoraFim;
    }

    public DiaSemanaEnum getDiaSemanaInicio() {
        return diaSemanaInicio;
    }

    public void setDiaSemanaInicio(DiaSemanaEnum diaSemanaInicio) {
        this.diaSemanaInicio = diaSemanaInicio;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public Integer getLotacaoPessoa() {
        return lotacaoPessoa;
    }

    public void setLotacaoPessoa(Integer lotacaoPessoa) {
        this.lotacaoPessoa = lotacaoPessoa;
    }

    public Estabelecimento getEstabelecimento() {
        return estabelecimento;
    }

    public void setEstabelecimento(Estabelecimento estabelecimento) {
        this.estabelecimento = estabelecimento;
    }

    public TipoEventoEnum getTipoEventoEnum() {
        return tipoEventoEnum;
    }

    public void setTipoEventoEnum(TipoEventoEnum tipoEventoEnum) {
        this.tipoEventoEnum = tipoEventoEnum;
    }

    public GeneroMusicalEnum getGeneroMusicalEnum() {
        return generoMusicalEnum;
    }

    public void setGeneroMusicalEnum(GeneroMusicalEnum generoMusicalEnum) {
        this.generoMusicalEnum = generoMusicalEnum;
    }

    public StatusEventoEnum getStatusEventoEnum() {
        return statusEventoEnum;
    }

    public void setStatusEventoEnum(StatusEventoEnum statusEventoEnum) {
        this.statusEventoEnum = statusEventoEnum;
    }
}
