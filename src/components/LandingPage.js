// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Blood Bank Application</h1>
      <div>
        <Link to="/donor">Donors</Link>
      </div>
      <div>
        <Link to="/recipient">Recipients</Link>
      </div>
      <div>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
}

export default LandingPage;