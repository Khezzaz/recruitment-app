package com.example.mycompany.recruitment.repository;

import com.example.mycompany.recruitment.model.Exercice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ExerciceRepository extends JpaRepository<Exercice , Integer> {
    public List<Exercice> findByLangage(String langage);
}
