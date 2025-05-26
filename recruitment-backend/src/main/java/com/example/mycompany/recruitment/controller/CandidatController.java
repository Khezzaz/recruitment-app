package com.example.mycompany.recruitment.controller;


import com.example.mycompany.recruitment.dto.CandidatDTO;
import com.example.mycompany.recruitment.service.CandidatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/api/candidats")
public class CandidatController {
    @Autowired
    private CandidatService candidatService;

    @PostMapping("/create")
    public ResponseEntity<CandidatDTO> newCandidat(@RequestBody CandidatDTO candidatDTO) {
        System.out.println("create candiadt with email :"+candidatDTO.getEmail()+" avec position : "+candidatDTO.getPositionRecrutement());
        CandidatDTO savedCandidatDTO = candidatService.create(candidatDTO);
        if (candidatDTO != null){
            return ResponseEntity.ok(candidatDTO);
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/getAll")
    public ResponseEntity<List<CandidatDTO>> getall(Model model){
        List<CandidatDTO> candidatDTOS = candidatService.getAll();

        return ResponseEntity.ok(candidatDTOS);
    }

    @PostMapping("/update")
    public ResponseEntity<CandidatDTO> updateCandidat(@RequestParam String email ,@RequestBody CandidatDTO newCandidatDTO ){
           if(candidatService.updateCandidat(email, newCandidatDTO) !=null){
               return ResponseEntity.ok(newCandidatDTO);
           }
           else {
               return ResponseEntity.badRequest().build();
           }
    }

    @GetMapping("/emails")
    public ResponseEntity<List<String>> getEmails() {
        List<CandidatDTO> candidatDTOS = candidatService.getAll();
        if (!candidatDTOS.isEmpty()) {
            List<String> emails = candidatDTOS.stream()
                    .map(CandidatDTO::getEmail)
                    .collect(Collectors.toList());
            return ResponseEntity.ok(emails);
        }
        return ResponseEntity.badRequest().build();
    }


}
