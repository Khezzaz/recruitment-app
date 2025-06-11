import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/HomePage.css';
import IMG from '../assets/IMG.svg';
import PexelsImage from '../assets/pexels-luis-gomes-166706-546819.jpg';

const HomePage = () => {
  return (
    <div className="content-container">
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
          <div className="inner d-flex justify-content-between align-items-center">
            <div className="masthead-brand">
              <Link to="/">
                <img src={IMG} alt="CDG Icon" className="masthead-icon" />
              </Link>
            </div>
            <nav className="nav nav-masthead justify-content-center">
              <Link className="nav-link active" to="/">Home</Link>
              <Link className="nav-link" to="/admin">Admin</Link>
              <a className="nav-link" href="#new-section">About</a>
              <a className="nav-link" href="#footer">Contact</a>
            </nav>
          </div>
        </header>

        <main role="main" className="inner cover text-center">
          <h1 className="cover-heading">Welcome to CDG coding context.</h1>
          <p className="lead">First digital solution for recruiting coding talents in Morocco.</p>
          <p className="lead">
            <Link to="/candidates" className="btn btn-lg btn-secondary">Get started</Link>
          </p>
        </main>
      </div>

      <section id="new-section" className="new-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={PexelsImage} alt="Description of image" className="img-fluid" />
            </div>
            <div className="col-md-6">
            <p>
    Cette application web de recrutement permet d'automatiser le processus de sélection des développeurs en proposant des exercices de codage. Les candidats soumettent leur code, qui est automatiquement compilé, exécuté et évalué en fonction des résultats attendus. L'application offre une interface intuitive pour les candidats, leur permettant de naviguer facilement entre les différentes sections de l'examen et de recevoir un retour immédiat sur leurs soumissions.
</p>
            </div>
          </div>
        </div>
      </section>
      

      <section id="footer-bottom" className="bg-grey text-center py-2">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </section>
    </div>
  );
};

export default HomePage;
