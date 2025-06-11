package com.example.mycompany.recruitment.mappers;

import com.example.mycompany.recruitment.dto.ExerciceDTO;
import com.example.mycompany.recruitment.model.Exercice;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ExerciceMapper implements Mapper<Exercice, ExerciceDTO> {

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Exercice convertToEnt(ExerciceDTO exerciceDTO) {
        return modelMapper.map(exerciceDTO, Exercice.class);
    }

    @Override
    public ExerciceDTO convertToDTO(Exercice exercice) {
        return modelMapper.map(exercice, ExerciceDTO.class);
    }

    // Méthode pour convertir une liste de DTOs en une liste d'entités
    public List<Exercice> toEntities(List<ExerciceDTO> exerciceDTOs) {
        return exerciceDTOs.stream()
                .map(this::convertToEnt)
                .collect(Collectors.toList());
    }
    // Méthode pour convertir une liste de DTOs en une liste d'entités
    public List<ExerciceDTO> toDTOs(List<Exercice> exercices) {
        return exercices.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
}
