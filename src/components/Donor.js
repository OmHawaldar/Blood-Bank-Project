// src/components/Donor.js
import React, { useState } from 'react';

function Donor() {
  const [donors, setDonors] = useState([]);
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [lastDonationDate, setLastDonationDate] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setDonors([...donors, { name, bloodGroup, lastDonationDate }]);
    setName('');
    setBloodGroup('');
    setLastDonationDate('');
  };

  return (
    <div>
      <h1>Donor Page</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Blood Group:</label>
          <input type="text" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required />
        </div>
        <div>
          <label>Last Donation Date:</label>
          <input type="date" value={lastDonationDate} onChange={(e) => setLastDonationDate(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
      <h2>Donation History</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Last Donation Date</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor, index) => (
            <tr key={index}>
              <td>{donor.name}</td>
              <td>{donor.bloodGroup}</td>
              <td>{donor.lastDonationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Donor;