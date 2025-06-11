package com.example.mycompany.recruitment.mappers;

import com.example.mycompany.recruitment.dto.SubmissionDetailDTO;
import com.example.mycompany.recruitment.model.SubmissionDetail;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class SubmissionDetailMapper {

    @Autowired
    private ModelMapper modelMapper;

    public SubmissionDetailDTO convertToDTO(SubmissionDetail submissionDetail) {
        return modelMapper.map(submissionDetail, SubmissionDetailDTO.class);
    }

    public SubmissionDetail convertToEntity(SubmissionDetailDTO submissionDetailDTO) {
        return modelMapper.map(submissionDetailDTO, SubmissionDetail.class);
    }

    public List<SubmissionDetail> convertToEntities(List<SubmissionDetailDTO> submissionDetailDTOs) {
        return submissionDetailDTOs.stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }

    public List<SubmissionDetailDTO> convertToDTOs(List<SubmissionDetail> submissionDetailDTOs) {
        return submissionDetailDTOs.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
}