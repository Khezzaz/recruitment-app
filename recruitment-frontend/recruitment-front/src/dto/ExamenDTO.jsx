// src/dto/ExamenDTO.jsx

import { CandidatDTO } from './CandidatDTO.jsx';
import { ExerciceDTO } from './ExerciceDTO';

export class ExamenDTO {
  constructor(id, candidat, date, exercices, duree) {
    this.id = id;
    this.candidat = candidat instanceof CandidatDTO ? candidat : null;
    this.date = date;
    this.exercices = Array.isArray(exercices) ? exercices : [];
    this.duree = duree;
  }
}
