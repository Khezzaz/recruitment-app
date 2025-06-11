// src/pages/ManageCandidates.jsx
import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCandidats, updateCandidat } from '../services/apiServices.jsx';
import { CandidatDTO } from '../dto/CandidatDTO.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const ManageCandidates = () => {
  const [candidats, setCandidats] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState('');
  const [candidatDetails, setCandidatDetails] = useState(new CandidatDTO());
  const [error, setError] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin/');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchCandidats = async () => {
      try {
        const fetchedCandidats = await getAllCandidats();
        setCandidats(fetchedCandidats.map(c => new CandidatDTO(c.id, c.nom, c.prenom, c.email, c.telephone, c.niveau, c.positionRecrutement)));
      } catch (error) {
        console.error('Erreur lors de la récupération des candidats:', error);
      }
    };

    fetchCandidats();
  }, []);

  const handleSelectChange = (e) => {
    const email = e.target.value;
    setSelectedEmail(email);

    const selectedCandidat = candidats.find(c => c.email === email);
    setCandidatDetails(selectedCandidat || new CandidatDTO());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCandidatDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    try {
      await updateCandidat(selectedEmail, candidatDetails);
      alert('Candidat mis à jour avec succès');
      navigate('/admin/home');
    } catch (error) {
      setError('Erreur lors de la mise à jour du candidat');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Gestion des Candidats</h2>
      <div className="form-group">
        <label>Choisir un candidat par e-mail</label>
        <select 
          className="form-control"
          value={selectedEmail}
          onChange={handleSelectChange}
        >
          <option value="">Sélectionner un candidat</option>
          {candidats.map((candidat) => (
            <option key={candidat.email} value={candidat.email}>
              {candidat.email}
            </option>
          ))}
        </select>
      </div>

      {candidatDetails && candidatDetails.email && (
        <div className="mt-4">
          <h4>Modifier les informations du candidat</h4>
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              className="form-control"
              name="nom"
              value={candidatDetails.nom}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Prénom</label>
            <input
              type="text"
              className="form-control"
              name="prenom"
              value={candidatDetails.prenom}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={candidatDetails.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Téléphone</label>
            <input
              type="text"
              className="form-control"
              name="telephone"
              value={candidatDetails.telephone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Niveau</label>
            <input
              type="text"
              className="form-control"
              name="niveau"
              value={candidatDetails.niveau}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Position de Recrutement</label>
            <input
              type="text"
              className="form-control"
              name="positionRecrutement"
              value={candidatDetails.positionRecrutement}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleUpdate} className="btn btn-primary mt-4">
            Mettre à jour
          </button>
          {error && <div className="text-danger mt-2">{error}</div>}
        </div>
      )}
       <div className="text-center mt-4">
    <Link to="/admin/home" className="btn btn-secondary">
      Retour à la page d'accueil admin
    </Link>
  </div>
    </div>
  );
};

export default ManageCandidates;
