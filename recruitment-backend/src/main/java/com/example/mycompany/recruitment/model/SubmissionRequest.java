package com.example.mycompany.recruitment.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubmissionRequest {
    private String email;
    private int examenId;
    private List<String> codes;

    // Getters et Setters
}
