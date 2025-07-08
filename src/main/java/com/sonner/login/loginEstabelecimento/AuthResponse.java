package com.sonner.login.loginEstabelecimento;

public class AuthResponse {
    private String token;
    private Integer idEstabelecimento;
    private String nomeEstabelecimento;

    public AuthResponse(String token, Integer idEstabelecimento, String nomeEstabelecimento) {
        this.token = token;
        this.idEstabelecimento = idEstabelecimento;
        this.nomeEstabelecimento = nomeEstabelecimento;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Integer getIdEstabelecimento() {
        return idEstabelecimento;
    }

    public void setIdEstabelecimento(Integer idEstabelecimento) {
        this.idEstabelecimento = idEstabelecimento;
    }

    public String getNomeEstabelecimento() {
        return nomeEstabelecimento;
    }

    public void setNomeEstabelecimento(String nomeEstabelecimento) {
        this.nomeEstabelecimento = nomeEstabelecimento;
    }
}
