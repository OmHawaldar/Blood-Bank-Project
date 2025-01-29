// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import CSS specific to LandingPage

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Blood Bank Application</h1>
      <div className="link-container">
        <Link to="/donor" className="link-button">Donors</Link>
        <Link to="/recipient" className="link-button">Recipients</Link>
        <Link to="/admin" className="link-button">Admin</Link>
      </div>
    </div>
  );
}

export default LandingPage;