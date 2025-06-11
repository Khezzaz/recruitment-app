import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { submitCodes } from '../services/apiServices.jsx'; // Utilisez les services API
import ExamEditor from './ExamEditor.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExamPage = () => {
  const [codes, setCodes] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { email, examen } = location.state || {};

  useEffect(() => {
    if (examen) {
      // Initialisez les codes avec les prototypes des exercices
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
    <div className="container mt-5">
      <h2 className="text-center mb-4">Passer l'examen</h2>
      {examen ? (
        <>
          {examen.exercices.map((exercice, index) => (
            <div key={index} className="mb-4">
              <h4>Exercice {index + 1}</h4>
              <p>{exercice.description}</p>
              <ExamEditor
                code={codes[index]}
                setCode={(newValue) => handleCodeChange(index, newValue)}
                language={exercice.langage}
              />
            </div>
          ))}
          <button onClick={handleSubmit} className="btn btn-primary btn-block mt-4">Soumettre</button>
        </>
      ) : (
        <p>Chargement de l'examen...</p>
      )}
    </div>
  );
};

export default ExamPage;
