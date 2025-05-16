package com.example.mycompany.recruitment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CandidatDTO {
    private int id;
    private String nom;
    private String prenom;
    private String email;
    private String telephone;
    private String niveau;
    private String positionRecrutement;
}
