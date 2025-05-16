package com.example.mycompany.recruitment.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "examens")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Examen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "candidat_id", nullable = false)
    private Candidat candidat;

    @Column(name = "date", nullable = false)
    private Timestamp date;

    @ManyToMany
    @JoinTable(name = "examen_exercice",
            joinColumns = @JoinColumn(name = "examen_id"),
            inverseJoinColumns = @JoinColumn(name = "exercice_id"))
    private List<Exercice> exercices;

    @Column(name = "duree", nullable = false)
    private int duree;
}
