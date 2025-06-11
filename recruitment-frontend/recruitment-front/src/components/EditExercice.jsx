// src/components/EditExercice.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateExercice } from '../services/apiServices.jsx';
import { ExerciceDTO } from '../dto/ExerciceDTO.jsx';

const EditExercice = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { exercice } = location.state || {};
  const [formData, setFormData] = useState(new ExerciceDTO(
    exercice?.id || '',
    exercice?.description || '',
    exercice?.expectedOutput || '',
    exercice?.langage || '',
    exercice?.prototype || '',
    exercice?.test || ''
  ));

  if (!exercice) {
    return <p>Exercice non trouvé</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateExercice(formData.id, formData);
      navigate('/admin/exercises');
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'exercice:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Modifier l'Exercice</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="langage" className="form-label">Langage</label>
          <input
            type="text"
            id="langage"
            name="langage"
            className="form-control"
            value={formData.langage}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prototype" className="form-label">Prototype</label>
          <input
            type="text"
            id="prototype"
            name="prototype"
            className="form-control"
            value={formData.prototype}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="test" className="form-label">Test</label>
          <input
            type="text"
            id="test"
            name="test"
            className="form-control"
            value={formData.test}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expectedOutput" className="form-label">Expected Output</label>
          <input
            type="text"
            id="expectedOutput"
            name="expectedOutput"
            className="form-control"
            value={formData.expectedOutput}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Sauvegarder</button>
      </form>
    </div>
  );
};

export default EditExercice;
