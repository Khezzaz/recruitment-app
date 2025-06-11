import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importation des composants
import HomePage from './components/HomePage.jsx';
import CandidatForm from './components/CandidatForm.jsx'; // Importer le formulaire candidat
import ExamPage from './components/ExamPage.jsx'; // Importer la page d'examen
import HomeAdmin from './components/HomeAdmin.jsx'; // Importer la page d'accueil Admin
import AdminLogin from './components/AdminLogin.jsx'; // Importer la page d'authentification Admin
import ManageCandidates from './components/ManageCandidates.jsx'; // Importer la page de gestion des candidats
import ManageExercises from './components/ManageExercises.jsx'; // Importer la page de gestion des exercices
import AddExercice from './components/AddExercice.jsx'; // Importer la page d'ajout d'exercice
import ExerciceDetail from './components/ExerciceDetail.jsx'; // Importer la page d'affichage des détails de l'exercice
import EditExercice from './components/EditExercice.jsx'; // Importer la page de modification d'exercice
import ConsultSubmission from './components/ConsultSubmission.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/candidates" element={<CandidatForm />} />
        <Route path="/exam" element={<ExamPage />} />
        <Route path="/admin/home" element={<HomeAdmin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/candidates" element={<ManageCandidates />} />
        <Route path="/admin/exercises" element={<ManageExercises />} />
        <Route path="/admin/exercices/create" element={<AddExercice />} />
        <Route path="/admin/exercices/view" element={<ExerciceDetail />} />
        <Route path="/admin/exercises/edit" element={<EditExercice />} />
        <Route path="/admin/submissions" element={<ConsultSubmission />} />
      </Routes>
    </Router>
  );
};

export default App;
