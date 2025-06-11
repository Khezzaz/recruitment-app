import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CandidatDTO } from '../dto/CandidatDTO.jsx';
import { createCandidat, createExamen } from '../services/apiServices.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/CandidatForm.css'; 

const CandidatForm = () => {
  const [candidatDTO, setCandidatDTO] = useState(new CandidatDTO());
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidatDTO({
      ...candidatDTO,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Valeurs du formulaire:', candidatDTO);

    try {
      const savedCandidat = await createCandidat(candidatDTO);
      if (savedCandidat) {
        const examen = await createExamen(savedCandidat.email, savedCandidat.positionRecrutement);
        navigate('/exam', {
          state: {
            email: savedCandidat.email,
            examen: examen
          }
        });
      } else {
        alert('Erreur lors de l\'inscription. Veuillez réessayer.');
      }
    } catch (error) {
      alert('Erreur lors de l\'inscription. Veuillez réessayer.');
    }
  };

  return (
    <div className="container candidat-form-container mt-5">
      <h2 className="text-center mb-4 form-title">Inscription Candidat</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Nom</label>
            <input
              type="text"
              name="nom"
              className="form-control"
              value={candidatDTO.nom || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label>Prénom</label>
            <input
              type="text"
              name="prenom"
              className="form-control"
              value={candidatDTO.prenom || ''}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={candidatDTO.email || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label>Téléphone</label>
            <input
              type="text"
              name="telephone"
              className="form-control"
              value={candidatDTO.telephone || ''}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Niveau</label>
            <input
              type="text"
              name="niveau"
              className="form-control"
              value={candidatDTO.niveau || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label>Position de Recrutement</label>
            <select
              name="positionRecrutement"
              className="form-control"
              value={candidatDTO.positionRecrutement}
              onChange={handleChange}
              required
            >
              <option value="">-- Sélectionner un email --</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="Developpeur Web">Développeur Web</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4 submit-btn">S'inscrire</button>
      </form>
    </div>
  );
};

export default CandidatForm;
