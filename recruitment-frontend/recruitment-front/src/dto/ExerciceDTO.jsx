// src/dto/ExerciceDTO.jsx

export class ExerciceDTO {
    constructor(id, description, expectedOutput, langage ,prototype ,test ) {
      this.id = id;
      this.description = description;
      this.expectedOutput = expectedOutput;
      this.langage = langage;
      this.prototype = prototype;
      this.test = test;

    }
  }
  