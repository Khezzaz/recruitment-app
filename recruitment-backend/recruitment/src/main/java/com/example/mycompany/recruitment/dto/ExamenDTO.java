package com.example.mycompany.recruitment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExamenDTO {
    private int id;
    private CandidatDTO candidat;  // Détails complets du candidat
    private Timestamp date;
    private List<ExerciceDTO> exercices;  // Détails complets des exercices
    private int duree;
}
