// src/services/apiServices.jsx

import axios from 'axios';

// Définissez l'URL de base pour les appels API
const API_BASE_URL = 'http://localhost:8080/api';

// Créez une instance Axios pour configurer les appels API
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonction pour créer un candidat
export const createCandidat = async (candidatDTO) => {
  try {
    const response = await apiClient.post('/candidats/create', candidatDTO);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création du candidat:', error);
    throw error;
  }
};

// Fonction pour créer un examen
export const createExamen = async (email, position) => {
  try {
    const response = await apiClient.get('/examens/create', {
      params: { email, position }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de l\'examen:', error);
    throw error;
  }
};

// Fonction pour soumettre les codes d'examen
export const submitCodes = async (email, examenId, codes) => {
  try {
    const response = await apiClient.post('/submissions/submit', {
      email,
      examenId,
      codes
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la soumission des codes:', error);
    throw error;
  }
};

// Fonction pour authentifier l'admin
export const authenticateAdmin = async (adminDTO) => {
  try {
    const response = await apiClient.post('/admins/authentificat', adminDTO);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'authentification de l\'admin:', error);
    throw error;
  }
};

// Fonction pour récupérer tous les candidats
export const getAllCandidats = async () => {
  try {
    const response = await apiClient.post('/candidats/getAll');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des candidats:', error);
    throw error;
  }
};

// Fonction pour mettre à jour un candidat
export const updateCandidat = async (email, candidatDTO) => {
  try {
    const response = await apiClient.post('/candidats/update', candidatDTO, {
      params: { email }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du candidat:', error);
    throw error;
  }
};
// Récupérer tous les exercices
export const getAllExercices = async () => {
  try {
    const response = await apiClient.get('/exercices/getall');
    return response.data;
  } catch (error) {
    console.error('Erreur lors du chargement des exercices:', error);
    throw error;
  }
};

// Supprimer un exercice
export const deleteExercice = async (id) => {
  try {
    await apiClient.delete('/exercices/delete', {
      params: { id_exercice: id },
    });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'exercice:', error);
    throw error;
  }
};

// Mettre à jour un exercice
export const updateExercice = async (id, exerciceDTO) => {
  try {
    const response = await apiClient.put('/exercices/update', exerciceDTO, {
      params: { id_exercice: id },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'exercice:', error);
    throw error;
  }
};

// Ajouter un exercice
export const createExercice = async (exerciceDTO) => {
  try {
    const response = await apiClient.post('/exercices/create', exerciceDTO);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de l\'exercice:', error);
    throw error;
  }
};

export const getSubmissionForCandidat = async (email) => {
  try {
    const response = await apiClient.post(`/submissions/getforCandidat`, null, {
      params: { email }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching submission details:', error);
    throw new Error('Failed to fetch submission details');
  }
};


export const getAllEmails = async () => {
  try {
    const response = await apiClient.get('/candidats/emails');
    return response.data;
  } catch (error) {
    console.error('Error fetching emails:', error);
    throw error;
  }
};