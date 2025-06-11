// src/dto/SubmissionDTO.jsx

import { CandidatDTO } from './CandidatDTO';
import { ExamenDTO } from './ExamenDTO';

export class SubmissionDTO {
  constructor(id, candidat, examen, score) {
    this.id = id;
    this.candidat = candidat instanceof CandidatDTO ? candidat : null;
    this.examen = examen instanceof ExamenDTO ? examen : null;
    this.score = score;
  }
}
