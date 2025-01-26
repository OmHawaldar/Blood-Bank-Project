// src/components/Admin.js
import React, { useState } from 'react';

function Admin() {
  const [donors, setDonors] = useState([
    { name: 'John Doe', bloodGroup: 'A+', lastDonationDate: '2024-12-01' }
  ]);
  const [recipients, setRecipients] = useState([
    { name: 'Jane Smith', bloodGroup: 'B+', requestDate: '2025-01-15' }
  ]);

  return (
    <div>
      <h1>Admin Page</h1>
      <h2>Manage Donors</h2>
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
      <h2>Manage Recipients</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Request Date</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((recipient, index) => (
            <tr key={index}>
              <td>{recipient.name}</td>
              <td>{recipient.bloodGroup}</td>
              <td>{recipient.requestDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;