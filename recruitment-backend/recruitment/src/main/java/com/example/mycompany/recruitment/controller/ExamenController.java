package com.example.mycompany.recruitment.controller;

import com.example.mycompany.recruitment.dto.ExamenDTO;
import com.example.mycompany.recruitment.service.ExamenService;
import com.example.mycompany.recruitment.service.ExerciceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/examens")
public class ExamenController {

    @Autowired
    private ExamenService examenService;

    @Autowired
    private ExerciceService exerciceService;

    @GetMapping("/create")
    public ResponseEntity<ExamenDTO> createExamen(@RequestParam String email, @RequestParam String position) {
        System.out.println("requete reçu pour creer examen pour cet email"+email);
        String langage = exerciceService.determineLangage(position);
        ExamenDTO examenDTO = examenService.createExamen(email, langage);

        if (examenDTO != null) {
            return ResponseEntity.ok(examenDTO);
        } else {
            return ResponseEntity.badRequest().build(); // Retourne une réponse d'erreur si l'examen n'a pas pu être créé
        }
    }
}
