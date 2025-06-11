import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateAdmin } from '../services/apiServices.jsx';
import AdminDTO from '../dto/AdminDTO.jsx'; // Importez la classe AdminDTO
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const adminDTO = new AdminDTO(username, password);
    
    try {
      const isAuthenticated = await authenticateAdmin(adminDTO);
      if (isAuthenticated) {
        // Stockez le statut d'authentification dans le localStorage ou sessionStorage
        sessionStorage.setItem('isAdminAuthenticated', 'true');
        navigate('/admin/home');
      } else {
        setError('Username or password incorrect');
      }
    } catch (error) {
      setError('Erreur lors de l\'authentification');
    }
  };
  
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
            className="form-control" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <div className="text-danger mt-2">{error}</div>}
        <button type="submit" className="btn btn-primary btn-block mt-4">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
