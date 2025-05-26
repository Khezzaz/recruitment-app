package com.example.mycompany.recruitment.repository;

import com.example.mycompany.recruitment.model.Examen;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ExamenRepository extends JpaRepository<Examen, Integer> {
}

