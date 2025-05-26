package com.example.mycompany.recruitment.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "submissions")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Submission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name = "candidat_id", nullable = false)
    private Candidat candidat;

    @OneToOne
    @JoinColumn(name = "examen_id", nullable = false)
    private Examen examen;

    @Column(name = "score", nullable = false)
    private int score;

    @OneToMany(mappedBy = "submission", cascade = CascadeType.ALL)
    private List<SubmissionDetail> submissionDetails;

    @Override
    public String toString() {
        return "Submission{" +
                "id=" + id +
                ", candidat=" + candidat +
                ", examen=" + examen +
                ", score=" + score +
                '}';
    }
}


