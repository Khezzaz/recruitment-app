package com.example.mycompany.recruitment.repository;

import com.example.mycompany.recruitment.model.Candidat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidatRepository extends JpaRepository<Candidat , Integer> {
    public Candidat findByEmail(String email);
}
