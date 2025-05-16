package com.example.mycompany.recruitment.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "submission_details")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubmissionDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "submission_id", nullable = false)
    private Submission submission;

    @ManyToOne
    @JoinColumn(name = "exercice_id", nullable = false)
    private Exercice exercice;

    @Column(name = "code", columnDefinition = "TEXT", nullable = false)
    private String code;

    @Column(name = "resultat", columnDefinition = "TEXT")
    private String resultat;

    @Override
    public String toString() {
        return "SubmissionDetail{" +
                "id=" + id +
                ", exercice=" + exercice +
                ", code='" + code + '\'' +
                ", resultat='" + resultat + '\'' +
                '}';
    }
}
