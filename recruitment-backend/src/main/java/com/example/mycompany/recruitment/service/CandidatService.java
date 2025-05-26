package com.example.mycompany.recruitment.service;



import com.example.mycompany.recruitment.dto.CandidatDTO;
import com.example.mycompany.recruitment.mappers.CandidatMapper;
import com.example.mycompany.recruitment.model.Candidat;
import com.example.mycompany.recruitment.repository.CandidatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CandidatService {
    @Autowired
    private CandidatRepository candidatRepository;
    @Autowired
    private CandidatMapper candidatMapper ;

    public CandidatDTO create(CandidatDTO candidatDTO){
        Candidat candidat = candidatMapper.convertToEnt(candidatDTO);
        Candidat saved = candidatRepository.save(candidat);
        return candidatMapper.convertToDTO(saved);
    }
    public CandidatDTO getCandidatByEmail(String email) {
        Candidat candidat = candidatRepository.findByEmail(email);
        return candidat != null ? candidatMapper.convertToDTO(candidat) : null;
    }
    public List<CandidatDTO> getAll(){
        List<Candidat> candidats = candidatRepository.findAll();
        if (candidats != null){
            return  candidatMapper.convertToDTOs(candidats);
        }
        return null;

    }
    public CandidatDTO updateCandidat(String email, CandidatDTO candidatDTO) {
        Candidat candidat = candidatRepository.findByEmail(email);
        if (candidat != null) {

            candidat.setNom(candidatDTO.getNom());
            candidat.setPrenom(candidatDTO.getPrenom());
            candidat.setEmail(candidatDTO.getEmail());
            candidat.setTelephone(candidatDTO.getTelephone());
            candidat.setNiveau(candidatDTO.getNiveau());
            candidat.setPositionRecrutement(candidatDTO.getPositionRecrutement());
            return candidatMapper.convertToDTO(candidatRepository.save(candidat));
        }
        return null;
    }




}