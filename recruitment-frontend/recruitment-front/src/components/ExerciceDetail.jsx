import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const ExerciceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { exercice } = location.state || {};

  if (!exercice) {
    return <p>Exercice non trouvé</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Détails de l'Exercice</h2>
      <div>
        <p><strong>Description:</strong> {exercice.description}</p>
        <p><strong>Langage:</strong> {exercice.langage}</p>
        <p><strong>Prototype:</strong> {exercice.prototype}</p>
        <p><strong>Test:</strong> {exercice.test}</p>
        <p><strong>Expected Output:</strong> {exercice.expectedOutput}</p>
        <button
          onClick={() => navigate('/admin/exercises/edit', { state: { exercice } })}
          className="btn btn-warning"
        >
          Modifier
        </button>
      </div>
    </div>
  );
};

export default ExerciceDetail;
