// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import CSS specific to LandingPage

/* src/components/LandingPage.css */

.link-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.link-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.link-button:hover {
  background-color: #0056b3;
}


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