package com.descartes.spring.model;

import javax.persistence.*;

@Entity
@Table(name="authentication_user")
public class Authentication {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String idsn;
    private String username;
    private String email;
    private String first_name;
    private String last_name;
    private String photo;
    private String title;

    public String getEmail() {
        return email;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getPhoto() {
        return "https://spitchdev-bucket-uwfmzpv98dvk.s3.amazonaws.com/media/"+photo;
    }

    public String getTitle() {
        return title;
    }

    public String getIdsn() {
        return idsn;
    }

    public Authentication() {
    }

    public Integer getId() {
        return id;
    }


    public String getUsername() {
        return username;
    }

    @OneToOne
    @JoinColumn(name = "id")
    private AuthenticationToken token;

    public String getToken() {
        return token.getKey();
    }
}
