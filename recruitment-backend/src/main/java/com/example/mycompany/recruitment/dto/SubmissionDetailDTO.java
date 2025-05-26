package com.example.mycompany.recruitment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubmissionDetailDTO {
    private int id;
    private SubmissionDTO submission;  // Détails complets de la soumission
    private ExerciceDTO exercice;       // Détails complets de l'exercice
    private String code;
    private String resultat;

    @Override
    public String toString() {
        return "SubmissionDetailDTO{" +
                "id=" + id +
                ", exercice=" + exercice +
                ", code='" + code + '\'' +
                ", resultat='" + resultat + '\'' +
                '}';
    }
}
