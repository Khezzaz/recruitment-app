import axios from 'axios';

// Définissez l'URL de base pour les appels API
const API_BASE_URL = 'http://localhost:8080/api/examens';

// Créez une instance Axios pour configurer les appels API
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createExamen = async (email, position) => {
  try {
    const response = await apiClient.get('/create', {
      params: { email, position }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de l\'examen:', error);
    throw error;
  }
};