import React, { useState, useEffect  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllEmails, getSubmissionForCandidat } from '../services/apiServices.jsx';
import ExamEditor from './ExamEditor.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const ConsultSubmission = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState('');
  const [submissionDetails, setSubmissionDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin/');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const emailList = await getAllEmails();
        setEmails(Array.isArray(emailList) ? emailList : []);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    fetchEmails();
  }, []);

  const handleEmailChange = async (e) => {
    const email = e.target.value;
    setSelectedEmail(email);

    if (email) {
      try {
        const submissionData = await getSubmissionForCandidat(email);
        console.log('Submission Data:', submissionData); // Vérifiez les données reçues
        setSubmissionDetails(submissionData);
      } catch (error) {
        console.error('Error fetching submission details:', error);
        setSubmissionDetails(null);
      }
    } else {
      setSubmissionDetails(null);
    }
  };

  return (
    <>
    <div className="container mt-5">
      <h2 className="text-center mb-4">Consultation des Soumissions</h2>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Sélectionner l'email du candidat</label>
        <select
          id="email"
          name="email"
          className="form-select"
          value={selectedEmail}
          onChange={handleEmailChange}
        >
          <option value="">-- Sélectionner un email --</option>
          {emails.map((email) => (
            <option key={email} value={email}>
              {email}
            </option>
          ))}
        </select>
      </div>

      {submissionDetails ? (
        <div className="submission-details mt-4">
          <h4>Examen: {submissionDetails.examen.id} - {new Date(submissionDetails.examen.date).toLocaleString()}</h4>
          <h5>Score: {submissionDetails.score}</h5>

          {submissionDetails.submissionDetailDTOS && submissionDetails.submissionDetailDTOS.length > 0 ? (
  submissionDetails.submissionDetailDTOS.map((detail, index) => (
    <div key={index} className="mb-4">
      <h6>Exercice {index + 1}: {detail.exercice.description}</h6>
      <p>Langage: {detail.exercice.langage}</p>
      <p>Prototype: {detail.exercice.prototype}</p>
      <p>Test: {detail.exercice.test}</p>
      <ExamEditor
        code={detail.code}
        setCode={() => {}}
        language={detail.exercice.langage}
        readOnly={true}
      />
      <p>Résultat attendu: {detail.exercice.expectedOutput}</p>
      <p>Résultat obtenu: {detail.resultat}</p>
    </div>
  ))
) : (
  <p>Aucun exercice trouvé pour cet examen.</p>
)}

        </div>
      ) : (
        <p>Aucune soumission trouvée pour cet email.</p>
      )}

    </div>
    
    <div className="text-center mt-4">
    <Link to="/admin/home" className="btn btn-secondary">
      Retour à la page d'accueil admin
    </Link>
  </div>

    
 </> );
};

export default ConsultSubmission;
