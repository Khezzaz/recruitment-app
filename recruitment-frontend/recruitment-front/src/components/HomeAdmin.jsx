import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeAdmin = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin/');
    }
  }, [navigate]);

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuthenticated');
    navigate('/');
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Admin Dashboard</h1>
      <div className="d-flex justify-content-center">
        <Link to="/admin/candidates" className="btn btn-primary mx-2">Gestion des Candidats</Link>
        <Link to="/admin/exercises" className="btn btn-primary mx-2">Gestion des Exercices</Link>
        <Link to="/admin/submissions" className="btn btn-primary mx-2">Consultation des Soumissions</Link>
      </div>
      
      {/* Bouton de déconnexion */}
      <div className="mt-4">
        <button onClick={handleLogout} className="btn btn-danger">
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default HomeAdmin;
