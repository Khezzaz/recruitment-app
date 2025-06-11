import axios from 'axios';

// Définissez l'URL de base pour les appels API
const API_BASE_URL = 'http://localhost:8080/api/exercices';

// Créez une instance Axios pour configurer les appels API
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Récupérer tous les exercices
export const getAllExercices = async () => {
  try {
    const response = await apiClient.get('/getall');
    return response.data;
  } catch (error) {
    console.error('Erreur lors du chargement des exercices:', error);
    throw error;
  }
};

// Supprimer un exercice
export const deleteExercice = async (id) => {
  try {
    await apiClient.delete('/delete', {
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
    const response = await apiClient.put('/update', exerciceDTO, {
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
    const response = await apiClient.post('/create', exerciceDTO);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de l\'exercice:', error);
    throw error;
  }
};