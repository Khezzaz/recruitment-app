package com.example.mycompany.recruitment.mappers;



import com.example.mycompany.recruitment.dto.CandidatDTO;
import com.example.mycompany.recruitment.model.Candidat;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CandidatMapper implements Mapper<Candidat, CandidatDTO> {

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Candidat convertToEnt(CandidatDTO candidatDTO) {
        return modelMapper.map(candidatDTO, Candidat.class);
    }


    @Override
    public CandidatDTO convertToDTO(Candidat candidat) {
        return modelMapper.map(candidat, CandidatDTO.class);
    }
    public List<CandidatDTO> convertToDTOs(List<Candidat> candidats){
        List<CandidatDTO> candidatDTOS = new ArrayList<>();
        for (Candidat candidat : candidats){
            candidatDTOS.add(convertToDTO(candidat));
        }
        return candidatDTOS;
    }
}