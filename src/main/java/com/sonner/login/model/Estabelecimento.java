package com.sonner.login.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sonner.login.model.enums.DiaSemanaEnum;
import com.sonner.login.model.enums.TipoEstabelecimentoEnum;
import org.hibernate.validator.constraints.br.CNPJ;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity
@Table(name = "estabelecimento")
@EntityListeners(AuditingEntityListener.class)
public class Estabelecimento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @CNPJ
    @Column(nullable = false, unique = true)
    private String cnpj;

    @Column(nullable = false)
    private String nome;

    @Email
    @Column(nullable = false)
    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = false)
    @Size(min = 6)
    private String senha;

    @Column(nullable = false)
    private String pais;

    @Column(nullable = false)
    private String estado;

    @Column(nullable = false)
    private String cep;

    @Column(nullable = false)
    private String cidade;

    @Column(nullable = false)
    private String endereco;

    @Column(nullable = false)
    private String complemento;

    @Column(nullable = false)
    private String telefone;

    @CreatedDate
    private LocalDate dataCriacao;

    @LastModifiedDate
    private LocalDate dataAtualizacao;

    private Boolean statusEstabelecimento;

    @Enumerated(EnumType.STRING)
    private TipoEstabelecimentoEnum tipoEstabelecimentoEnum;

    @Column(length = 500)
    private String logoEstabelecimentoUrl;

    @Column(length = 1000)
    private String descricaoEstabelecimento;

    @Enumerated(EnumType.STRING)
    private DiaSemanaEnum diaSemanaInicio;

    @Enumerated(EnumType.STRING)
    private DiaSemanaEnum diaSemanaFim;

    private LocalTime horaAbertura;

    private LocalTime horaFechamento;

    @OneToMany(mappedBy = "estabelecimento", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Evento> eventos;


    public Estabelecimento() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
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

    public Boolean getStatusEstabelecimento() {
        return statusEstabelecimento;
    }

    public void setStatusEstabelecimento(Boolean statusEstabelecimento) {
        this.statusEstabelecimento = statusEstabelecimento;
    }

    public TipoEstabelecimentoEnum getTipoEstabelecimentoEnum() {
        return tipoEstabelecimentoEnum;
    }

    public void setTipoEstabelecimentoEnum(TipoEstabelecimentoEnum tipoEstabelecimentoEnum) {
        this.tipoEstabelecimentoEnum = tipoEstabelecimentoEnum;
    }

    public String getLogoEstabelecimentoUrl() {
        return logoEstabelecimentoUrl;
    }

    public void setLogoEstabelecimentoUrl(String logoEstabelecimentoUrl) {
        this.logoEstabelecimentoUrl = logoEstabelecimentoUrl;
    }

    public String getDescricaoEstabelecimento() {
        return descricaoEstabelecimento;
    }

    public void setDescricaoEstabelecimento(String descricaoEstabelecimento) {
        this.descricaoEstabelecimento = descricaoEstabelecimento;
    }

    public DiaSemanaEnum getDiaSemanaInicio() {
        return diaSemanaInicio;
    }

    public void setDiaSemanaInicio(DiaSemanaEnum diaSemanaInicio) {
        this.diaSemanaInicio = diaSemanaInicio;
    }

    public DiaSemanaEnum getDiaSemanaFim() {
        return diaSemanaFim;
    }

    public void setDiaSemanaFim(DiaSemanaEnum diaSemanaFim) {
        this.diaSemanaFim = diaSemanaFim;
    }

    public LocalTime getHoraAbertura() {
        return horaAbertura;
    }

    public void setHoraAbertura(LocalTime horaAbertura) {
        this.horaAbertura = horaAbertura;
    }

    public LocalTime getHoraFechamento() {
        return horaFechamento;
    }

    public void setHoraFechamento(LocalTime horaFechamento) {
        this.horaFechamento = horaFechamento;
    }

    public List<Evento> getEventos() {
        return eventos;
    }

    public void setEventos(List<Evento> eventos) {
        this.eventos = eventos;
    }
}
