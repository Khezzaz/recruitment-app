// src/dto/SubmissionDetailDTO.jsx

import { SubmissionDTO } from './SubmissionDTO';
import { ExerciceDTO } from './ExerciceDTO';

export class SubmissionDetailDTO {
  constructor(id, submission, exercice, code, resultat) {
    this.id = id;
    this.submission = submission instanceof SubmissionDTO ? submission : null;
    this.exercice = exercice instanceof ExerciceDTO ? exercice : null;
    this.code = code;
    this.resultat = resultat;
  }
}