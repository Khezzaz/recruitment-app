package com.example.mycompany.recruitment.service;

import com.example.mycompany.recruitment.dto.ExerciceDTO;
import com.example.mycompany.recruitment.mappers.ExerciceMapper;
import com.example.mycompany.recruitment.model.Exercice;
import com.example.mycompany.recruitment.repository.ExerciceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ExerciceService {

    @Autowired
    private ExerciceRepository exerciceRepository;

    @Autowired
    private ExerciceMapper exerciceMapper;

    public List<ExerciceDTO> getRandomExercicesByLangage(String langage) {
        List<Exercice> exercices = exerciceRepository.findByLangage(langage);
        Collections.shuffle(exercices); // Mélange les exercices
        return exercices.stream()
                .limit(3) // Sélectionne les 3 premiers exercices
                .map(exerciceMapper::convertToDTO)
                .collect(Collectors.toList());
    }

    public String determineLangage(String positionRecrutement) {
        switch (positionRecrutement.toLowerCase()) {
            case "developpeur web":
                return "java";
            case "data scientist":
                return "python";
            case "developpeur c++":
                return "c++";
            default:
                throw new IllegalArgumentException("Position de recrutement non reconnue");
        }
    }

    public List<ExerciceDTO> getAll() {
        List<Exercice> exercices = exerciceRepository.findAll();
        if (exercices != null) {
            return exerciceMapper.toDTOs(exercices);
        }
        return null;
    }

    public ExerciceDTO createExercice(ExerciceDTO exerciceDTO) {
        Exercice exercice = exerciceMapper.convertToEnt(exerciceDTO);
        Exercice savedExercice = exerciceRepository.save(exercice);
        return exerciceMapper.convertToDTO(savedExercice);
    }

    public boolean deleteExercice(int id_exercice) {
        if (exerciceRepository.existsById(id_exercice)) {
            exerciceRepository.deleteById(id_exercice);
            return true;
        }
        return false;
    }

    public ExerciceDTO updateExercice(int id_exercice, ExerciceDTO newExerciceDTO) {
        if (exerciceRepository.existsById(id_exercice)) {
            Exercice existingExercice = exerciceRepository.findById(id_exercice).orElse(null);
            if (existingExercice != null) {
                Exercice updatedExercice = exerciceRepository.save(exerciceMapper.convertToEnt(newExerciceDTO));
                return exerciceMapper.convertToDTO(updatedExercice);
            }
        }
        return null;
    }
}
