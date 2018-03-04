package com.descartes.spring.controller;

import com.descartes.spring.model.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.User;
import org.springframework.social.facebook.api.impl.FacebookTemplate;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.validation.Valid;


@RestController
public class AuthenticationController {

    private AuthenticationRepository repository;

    @Inject
    public void setRepository(AuthenticationRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(value="/token", method = RequestMethod.POST)
    public ResponseEntity verifToken(@Valid @RequestBody Token tok) {


        Facebook facebook = new FacebookTemplate(tok.getToken());

        try{

            String [] fields = { "id" };
            User profile = facebook.fetchObject("me", User.class, fields);
            Authentication auth = repository.findByIdsn( profile.getId() );

            if( auth != null ) {
                return new ResponseEntity(auth, HttpStatus.OK);
            }

        }catch(Exception e){
            System.out.print( e );
        }

        return new ResponseEntity("Unauthorized", HttpStatus.UNAUTHORIZED);
    }

}
