import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CandidatForm from './pages/CandidatFormPage.jsx';
import ExamPage from './pages/ExamPage.jsx'; 

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/candidates" element={<CandidatForm />} />
        <Route path="/exam" element={<ExamPage />} />
      </Routes>
    </Router>
  );
};

export default App
