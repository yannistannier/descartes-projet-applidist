package com.descartes.spring.model;

import javax.validation.constraints.NotNull;

public class Token {

    @NotNull
    private String token;

    public Token() {
    }

    public Token(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
