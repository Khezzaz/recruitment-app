package com.example.mycompany.recruitment.controller;

import com.example.mycompany.recruitment.dto.SubmissionDTO;
import com.example.mycompany.recruitment.model.SubmissionRequest;
import com.example.mycompany.recruitment.service.SubmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/submissions")
public class SubmissionController {

    @Autowired
    private SubmissionService submissionService;

    @PostMapping("/submit")
    public ResponseEntity<SubmissionDTO> submitExamen(@RequestBody SubmissionRequest submissionRequest) {
        SubmissionDTO submissionDTO = submissionService.createSubmission(
                submissionRequest.getEmail(),
                submissionRequest.getExamenId(),
                submissionRequest.getCodes()
        );
        if (submissionDTO != null) {
            return ResponseEntity.ok(submissionDTO);
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/getforCandidat")
    public ResponseEntity<SubmissionDTO> getSubmissionforCandidat(@RequestParam String email) {
        SubmissionDTO submissionDTO = submissionService.getSubmissionByCandidatEmail(email);
        if(submissionDTO != null) {
            System.out.println(submissionDTO);
            return ResponseEntity.ok(submissionDTO);
        }
        return ResponseEntity.notFound().build();
    }

}
