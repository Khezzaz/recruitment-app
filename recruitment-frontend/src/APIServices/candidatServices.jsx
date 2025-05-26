import axios from 'axios';

// Définissez l'URL de base pour les appels API
const API_BASE_URL = 'http://localhost:8080/api/candidats';

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
    const response = await apiClient.post('/create', candidatDTO);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création du candidat:', error);
    throw error;
  }
};

export const getAllCandidats = async () => {
  try {
    const response = await apiClient.post('/getAll');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des candidats:', error);
    throw error;
  }
};

// Fonction pour mettre à jour un candidat
export const updateCandidat = async (email, candidatDTO) => {
  try {
    const response = await apiClient.post('/update', candidatDTO, {
      params: { email }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du candidat:', error);
    throw error;
  }
};

export const getAllEmails = async () => {
  try {
    const response = await apiClient.get('/emails');
    return response.data;
  } catch (error) {
    console.error('Error fetching emails:', error);
    throw error;
  }
};