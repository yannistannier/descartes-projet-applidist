package com.descartes.spring.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuthenticationTokenRepository extends JpaRepository<AuthenticationToken, Integer> {
}
