import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/submissions';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getSubmissionForCandidat = async (email) => {
  try {
    const response = await apiClient.post(`/getforCandidat`, null, {
      params: { email }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching submission details:', error);
    throw new Error('Failed to fetch submission details');
  }
};

export const submitCodes = async (email, examenId, codes) => {
  try {
    const response = await apiClient.post('/submit', {
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