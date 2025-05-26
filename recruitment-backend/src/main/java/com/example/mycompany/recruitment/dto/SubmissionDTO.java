package com.example.mycompany.recruitment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubmissionDTO {
    private int id;
    private CandidatDTO candidat;  // Détails complets du candidat
    private ExamenDTO examen;      // Détails complets de l'examen
    private int score;
    private List<SubmissionDetailDTO> submissionDetailDTOS ;

}
