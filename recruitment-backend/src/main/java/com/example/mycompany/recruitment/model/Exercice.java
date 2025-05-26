package com.example.mycompany.recruitment.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "exercices")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Exercice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "expected_output", nullable = false)
    private String expectedOutput;

    @Column(name = "langage", nullable = false)
    private String langage;

    // Nouveau champ pour le prototype de la fonction demandée
    @Column(name = "prototype", nullable = false)
    private String prototype;

    // Nouveau champ pour les tests de la fonction
    @Column(name = "test", nullable = false)
    private String test;
}
