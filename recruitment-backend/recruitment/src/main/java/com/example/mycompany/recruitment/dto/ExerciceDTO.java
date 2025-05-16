package com.example.mycompany.recruitment.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExerciceDTO {
    private int id;
    private String description;
    private String expectedOutput;
    private String langage;
    private String prototype;
    private String test;
}
