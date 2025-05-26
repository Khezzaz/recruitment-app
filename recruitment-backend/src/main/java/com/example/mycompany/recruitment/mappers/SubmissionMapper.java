package com.example.mycompany.recruitment.mappers;

import com.example.mycompany.recruitment.dto.SubmissionDTO;
import com.example.mycompany.recruitment.dto.SubmissionDetailDTO;
import com.example.mycompany.recruitment.model.Submission;
import com.example.mycompany.recruitment.model.SubmissionDetail;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SubmissionMapper implements Mapper<Submission, SubmissionDTO> {

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    SubmissionDetailMapper submissionDetailMapper ;

    @Override
    public Submission convertToEnt(SubmissionDTO submissionDTO) {
        return modelMapper.map(submissionDTO, Submission.class);
    }

    @Override
    public SubmissionDTO convertToDTO(Submission submission) {
        List<SubmissionDetailDTO> submissionDetailDTOs = submissionDetailMapper.convertToDTOs(submission.getSubmissionDetails());
        SubmissionDTO submission1 = modelMapper.map(submission, SubmissionDTO.class);
        submission1.setSubmissionDetailDTOS(submissionDetailDTOs);
        return submission1;
    }
}