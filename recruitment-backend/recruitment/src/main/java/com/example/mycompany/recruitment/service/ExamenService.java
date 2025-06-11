package com.example.mycompany.recruitment.service;

import com.example.mycompany.recruitment.dto.ExamenDTO;
import com.example.mycompany.recruitment.dto.ExerciceDTO;
import com.example.mycompany.recruitment.mappers.ExamenMapper;
import com.example.mycompany.recruitment.mappers.ExerciceMapper;
import com.example.mycompany.recruitment.model.Candidat;
import com.example.mycompany.recruitment.model.Examen;
import com.example.mycompany.recruitment.repository.CandidatRepository;
import com.example.mycompany.recruitment.repository.ExamenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class ExamenService {

    @Autowired
    private ExamenRepository examenRepository;

    @Autowired
    private CandidatRepository candidatRepository;

    @Autowired
    private ExerciceService exerciceService;

    @Autowired
    private ExamenMapper examenMapper;

    @Autowired
    private ExerciceMapper exerciceMapper;

    public ExamenDTO createExamen(String email, String langage) {
        Candidat candidat = candidatRepository.findByEmail(email);
        if (candidat == null) {
            return null; // Le candidat n'existe pas
        }

        List<ExerciceDTO> exercices = exerciceService.getRandomExercicesByLangage(langage);

        Examen examen = new Examen();
        examen.setCandidat(candidat);
        examen.setDate(new Timestamp(System.currentTimeMillis()));
        examen.setExercices(exerciceMapper.toEntities(exercices));
        examen.setDuree(120); // Par exemple, une durée de 120 minutes

        examen = examenRepository.save(examen);
        return examenMapper.convertToDTO(examen);
    }
}
