package com.descartes.spring.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuthenticationRepository extends JpaRepository<Authentication, Integer> {

    Authentication findByIdsn(String id);
}
