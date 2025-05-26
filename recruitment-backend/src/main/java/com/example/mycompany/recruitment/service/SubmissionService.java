package com.example.mycompany.recruitment.service;

import com.example.mycompany.recruitment.dto.CandidatDTO;
import com.example.mycompany.recruitment.dto.SubmissionDTO;
import com.example.mycompany.recruitment.mappers.SubmissionMapper;
import com.example.mycompany.recruitment.model.Candidat;
import com.example.mycompany.recruitment.model.Examen;
import com.example.mycompany.recruitment.model.Exercice;
import com.example.mycompany.recruitment.model.Submission;
import com.example.mycompany.recruitment.model.SubmissionDetail;
import com.example.mycompany.recruitment.repository.CandidatRepository;
import com.example.mycompany.recruitment.repository.ExamenRepository;
import com.example.mycompany.recruitment.repository.SubmissionDetailRepository;
import com.example.mycompany.recruitment.repository.SubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
public class SubmissionService {

    @Autowired
    private SubmissionRepository submissionRepository;

    @Autowired
    private CandidatRepository candidatRepository;

    @Autowired
    private ExamenRepository examenRepository;

    @Autowired
    private SubmissionDetailRepository submissionDetailRepository;

    @Autowired
    private SubmissionMapper submissionMapper;

    @Autowired
    private JavaCodeService javaCodeService;

    @Autowired
    private PythonCodeService pythonCodeService;

    public SubmissionDTO createSubmission(String email, int examenId, List<String> codes) {
        Candidat candidat = candidatRepository.findByEmail(email);
        if (candidat == null) {
            throw new RuntimeException("Candidat not found");
        }

        Examen examen = examenRepository.findById(examenId)
                .orElseThrow(() -> new RuntimeException("Examen not found"));

        Submission submission = new Submission();
        submission.setCandidat(candidat);
        submission.setExamen(examen);

        List<SubmissionDetail> submissionDetails = examen.getExercices().stream().map(exercice -> {
            SubmissionDetail detail = new SubmissionDetail();
            detail.setSubmission(submission);
            detail.setExercice(exercice);

            int index = examen.getExercices().indexOf(exercice);
            if (index >= 0 && index < codes.size()) {
                String candidatCode = codes.get(index);
                detail.setCode(candidatCode);

                // Concaténer le code du candidat avec les tests de l'exercice
                String codeWithTests = concatenateCodeWithTests(candidatCode, exercice);

                // Appel du service de compilation en fonction du langage de l'exercice
                String result = executeCodeBasedOnLanguage(exercice.getLangage(), codeWithTests);
                detail.setResultat(result);
            }
            return detail;
        }).collect(Collectors.toList());

        // Calcul du score
        int score = calculateScore(submissionDetails, examen);
        submission.setScore(score);

        // Sauvegarde de la soumission et des détails
        submissionRepository.save(submission);
        submissionDetails.forEach(submissionDetailRepository::save);
        submission.setSubmissionDetails(submissionDetails);

        return submissionMapper.convertToDTO(submission);
    }

    private int calculateScore(List<SubmissionDetail> submissionDetails, Examen examen) {
        long correctAnswers = submissionDetails.stream()
                .filter(detail -> detail.getResultat().equals(detail.getExercice().getExpectedOutput()))
                .count();

        // Calculer le score en pourcentage
        double scorePercentage = ((double) correctAnswers / examen.getExercices().size()) * 100;

        return (int) scorePercentage;  // Retourner le score en entier
    }

    private String concatenateCodeWithTests(String candidatCode, Exercice exercice) {
        if ("java".equalsIgnoreCase(exercice.getLangage())) {
            int lastIndex = candidatCode.lastIndexOf('}');
            if (lastIndex != -1) {
                // Insérer le test avant le dernier '}'
                String beforeLastBrace = candidatCode.substring(0, lastIndex);
                String afterLastBrace = candidatCode.substring(lastIndex);
                return beforeLastBrace + "\n\n" + exercice.getTest() + "\n" + afterLastBrace;
            }
        }

        // Pour les autres langages ou si le dernier '}' n'est pas trouvé, on concatène simplement
        return candidatCode + "\n\n" + exercice.getTest();
    }


    private String executeCodeBasedOnLanguage(String langage, String codeWithTests) {
        if ("java".equalsIgnoreCase(langage)) {
            return javaCodeService.executeCode(codeWithTests);
        } else if ("python".equalsIgnoreCase(langage)) {
            return pythonCodeService.executeCode(codeWithTests);
        }
        throw new IllegalArgumentException("Unsupported language: " + langage);
    }

    public SubmissionDTO getSubmissionByCandidatEmail(String email) {
        Candidat candidat = candidatRepository.findByEmail(email);
        Submission submission = submissionRepository.findByCandidatId(candidat.getId());
        List<SubmissionDetail> submissionDetails = submissionDetailRepository.findBySubmissionId(submission.getId());
        submission.setSubmissionDetails(submissionDetails);
        if (submission != null) {
            return submissionMapper.convertToDTO(submission);
        }
        return null;
    }
}
