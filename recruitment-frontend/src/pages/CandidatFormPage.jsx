import React from 'react';
import CandidatForm from '../components/CandidatForm';
import '../styles/CandidatFormePage.css';

const CandidatFormPage = () => {
  return (
    <div className="form-page-container">
      <div className="form-card-wrapper">
        <CandidatForm />
      </div>
    </div>
  );
};

export default CandidatFormPage;