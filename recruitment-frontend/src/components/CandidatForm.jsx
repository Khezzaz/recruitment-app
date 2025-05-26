import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCandidat } from '../APIServices/candidatServices';
import { createExamen } from '../APIServices/examenServices';
import '../styles/CandidatForm.css';

const CandidatForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    niveau: '',
    positionRecrutement: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const savedCandidat = await createCandidat(formData);
      if (savedCandidat) {
        const examen = await createExamen(savedCandidat.email, savedCandidat.positionRecrutement);
        navigate('/exam', {
          state: { email: savedCandidat.email, examen }
        });
      }
    } catch (error) {
      alert('Erreur lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Inscription Candidat</h2>
        <div className="header-decoration"></div>
      </div>
      
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="form-grid">
          <div className="form-group">
            <label className="input-label">
              Nom
              <input 
                type="text" 
                name="nom" 
                value={formData.nom} 
                onChange={handleChange} 
                className="form-input"
                required 
              />
              <span className="input-border"></span>
            </label>
          </div>

          <div className="form-group">
            <label className="input-label">
              Prénom
              <input 
                type="text" 
                name="prenom" 
                value={formData.prenom} 
                onChange={handleChange} 
                className="form-input"
                required 
              />
              <span className="input-border"></span>
            </label>
          </div>

          <div className="form-group">
            <label className="input-label">
              Email
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="form-input"
                required 
              />
              <span className="input-border"></span>
            </label>
          </div>

          <div className="form-group">
            <label className="input-label">
              Téléphone
              <input 
                type="tel" 
                name="telephone" 
                value={formData.telephone} 
                onChange={handleChange} 
                className="form-input"
                required 
              />
              <span className="input-border"></span>
            </label>
          </div>

          <div className="form-group">
            <label className="input-label">
              Niveau
              <input 
                type="text" 
                name="niveau" 
                value={formData.niveau} 
                onChange={handleChange} 
                className="form-input"
                required 
              />
              <span className="input-border"></span>
            </label>
          </div>

          <div className="form-group">
            <label className="input-label">
              Position de Recrutement
              <div className="custom-select">
                <select 
                  name="positionRecrutement" 
                  value={formData.positionRecrutement} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">-- Sélectionner une option --</option>
                  <option value="Data Scientist">Data Scientist</option>
                  <option value="Developpeur Web">Développeur Web</option>
                </select>
                <div className="select-arrow"></div>
              </div>
            </label>
          </div>
        </div>

        <button type="submit" className={`submit-button ${isLoading ? 'loading' : ''}`}>
          <span className="button-text">S'inscrire</span>
          <div className="button-loader"></div>
        </button>
      </form>
    </div>
  );
};

export default CandidatForm;