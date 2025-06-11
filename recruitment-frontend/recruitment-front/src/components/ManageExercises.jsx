import React, { useState, useEffect } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { getAllExercices, deleteExercice } from '../services/apiServices.jsx';


const ManageExercises = () => {
  const [exercices, setExercices] = useState([]);
  const [filterLangage, setFilterLangage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin/');
    }
  }, [navigate]);
  useEffect(() => {
    const fetchExercices = async () => {
      try {
        const data = await getAllExercices();
        setExercices(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des exercices:', error);
      }
    };

    fetchExercices();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteExercice(id);
      setExercices(exercices.filter(exercice => exercice.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'exercice:', error);
    }
  };

  const filteredExercices = filterLangage 
    ? exercices.filter(exercice => exercice.langage === filterLangage) 
    : exercices;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Gestion des Exercices</h2>
      
      <div className="mb-4">
        <label htmlFor="filterLangage" className="form-label">Filtrer par langage</label>
        <select
          id="filterLangage"
          className="form-select"
          value={filterLangage}
          onChange={(e) => setFilterLangage(e.target.value)}
        >
          <option value="">Tous les langages</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
        </select>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Langage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredExercices.map(exercice => (
            <tr key={exercice.id}>
              <td>{exercice.description}</td>
              <td>{exercice.langage}</td>
              <td>
                <Link
                  to={`/admin/exercices/view`}
                  state={{ exercice }} // Pass the exercice object
                  className="btn btn-info btn-sm me-2"
                >
                  Afficher
                </Link>
                <Link
                  to={`/admin/exercises/edit`}
                  state={{ exercice }} // Pass the exercice object
                  className="btn btn-warning btn-sm me-2"
                >
                  Modifier
                </Link>
                <button onClick={() => handleDelete(exercice.id)} className="btn btn-danger btn-sm">
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/admin/exercices/create" className="btn btn-primary mt-4">Ajouter un Exercice</Link>
      <div className="text-center mt-4">
    <Link to="/admin/home" className="btn btn-secondary">
      Retour à la page d'accueil admin
    </Link>
  </div>
    </div>
  );
};

export default ManageExercises;
