package com.example.mycompany.recruitment.repository;

import com.example.mycompany.recruitment.dto.CandidatDTO;
import com.example.mycompany.recruitment.model.Submission;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubmissionRepository extends JpaRepository<Submission ,Integer> {
    public Submission findByCandidatId(int id);
}

