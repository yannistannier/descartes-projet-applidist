package com.descartes.spring.model;

import javax.persistence.*;

@Entity
@Table(name="authtoken_token")
public class AuthenticationToken {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "user_id")
    private Integer id;

    private String key;


    public AuthenticationToken() {
    }

    public String getKey() {
        return key;
    }

    public Integer getId() {
        return id;
    }

}
