package com.example.mycompany.recruitment.mappers;


import com.example.mycompany.recruitment.dto.ExamenDTO;
import com.example.mycompany.recruitment.model.Examen;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ExamenMapper implements Mapper<Examen, ExamenDTO> {

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Examen convertToEnt(ExamenDTO examenDTO) {
        return modelMapper.map(examenDTO, Examen.class);
    }


    @Override
    public ExamenDTO convertToDTO(Examen examen) {
        return modelMapper.map(examen, ExamenDTO.class);
    }
}