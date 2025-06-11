import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { submitCodes } from '../APIServices/submissionServices.jsx'; 
import ExamEditor from '../components/ExamEditor.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ExamePage.css'

const ExamPage = () => {
  const [codes, setCodes] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { email, examen } = location.state || {};

  useEffect(() => {
    if (examen) {
      const initialCodes = examen.exercices.map((exercice) => exercice.prototype);
      setCodes(initialCodes);
    }
  }, [examen]);

  if (!examen) {
    return <p>Aucun examen disponible.</p>;
  }

  const handleCodeChange = (index, newValue) => {
    const newCodes = [...codes];
    newCodes[index] = newValue;
    setCodes(newCodes);
  };

  const handleSubmit = async () => {
    if (!email || !examen.id) {
      alert('Les informations nécessaires sont manquantes.');
      return;
    }

    try {
      await submitCodes(email, examen.id, codes);
      alert('Soumission réussie !');
      navigate('/');
    } catch (error) {
      alert('Erreur lors de la soumission.');
    }
  };

 return (
    <div className="exam-container">
      <div className="exam-header">
        <h2>Examen {examen.positionRecrutement}</h2>
        <p className="exam-duration">Durée : {examen.duree} minutes</p>
      </div>

      {examen.exercices.map((exercice, index) => (
        <div key={index} className="exercise-card">
          <div className="exercise-header">
            <h3>Exercice {index + 1}</h3>
            <div className="exercise-tag">
              {exercice.langage}
            </div>
          </div>
          <p className="exercise-description">{exercice.description}</p>
          <ExamEditor
            code={codes[index]}
            setCode={(newValue) => handleCodeChange(index, newValue)}
            language={exercice.langage}
          />
        </div>
      ))}

      <div className="exam-footer">
        <button onClick={handleSubmit} className="submit-exam-button">
          Soumettre l'examen
        </button>
      </div>
    </div>
  );
};

export default ExamPage;
