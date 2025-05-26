import axios from 'axios';

// Définissez l'URL de base pour les appels API
const API_BASE_URL = 'http://localhost:8080/api/admins';

// Créez une instance Axios pour configurer les appels API
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonction pour authentifier l'admin
export const authenticateAdmin = async (adminDTO) => {
  try {
    const response = await apiClient.post('/authentificat', adminDTO);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'authentification de l\'admin:', error);
    throw error;
  }
};