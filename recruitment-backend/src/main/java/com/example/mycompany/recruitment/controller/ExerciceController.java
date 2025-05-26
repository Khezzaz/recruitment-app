package com.example.mycompany.recruitment.controller;

import com.example.mycompany.recruitment.dto.ExerciceDTO;
import com.example.mycompany.recruitment.service.ExerciceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/exercices")
public class ExerciceController {

    @Autowired
    private ExerciceService exerciceService;

    @PostMapping("/create")
    public ResponseEntity<ExerciceDTO> createExercice(@RequestBody ExerciceDTO exerciceDTO) {
        ExerciceDTO exercice = exerciceService.createExercice(exerciceDTO);
        return ResponseEntity.ok(exercice);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> delete(@RequestParam int id_exercice) {
        boolean deleted = exerciceService.deleteExercice(id_exercice);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update")
    public ResponseEntity<ExerciceDTO> updateExercice(@RequestParam int id_exercice, @RequestBody ExerciceDTO newExerciceDTO) {
        ExerciceDTO updatedExercice = exerciceService.updateExercice(id_exercice, newExerciceDTO);
        if (updatedExercice != null) {
            System.out.println(newExerciceDTO);
            return ResponseEntity.ok(updatedExercice);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getall")
    public ResponseEntity<List<ExerciceDTO>> getAll(Model model) {
        List<ExerciceDTO> exerciceDTOList = exerciceService.getAll();
        return ResponseEntity.ok(exerciceDTOList);
    }
}
