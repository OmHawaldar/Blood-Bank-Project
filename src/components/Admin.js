// src/components/Admin.js
import React, { useState } from 'react';

function Admin() {
  const [donors, setDonors] = useState([
    { name: 'John Doe', bloodGroup: 'A+', lastDonationDate: '2024-12-01', status: 'Pending' }
  ]);
  const [recipients, setRecipients] = useState([
    { name: 'Jane Smith', bloodGroup: 'B+', requestDate: '2025-01-15', status: 'Pending' }
  ]);

  const handleApproveDonor = (index) => {
    const updatedDonors = [...donors];
    updatedDonors[index].status = 'Approved';
    setDonors(updatedDonors);
  };

  const handleRejectDonor = (index) => {
    const updatedDonors = [...donors];
    updatedDonors[index].status = 'Rejected';
    setDonors(updatedDonors);
  };

  const handleApproveRecipient = (index) => {
    const updatedRecipients = [...recipients];
    updatedRecipients[index].status = 'Approved';
    setRecipients(updatedRecipients);
  };

  const handleRejectRecipient = (index) => {
    const updatedRecipients = [...recipients];
    updatedRecipients[index].status = 'Rejected';
    setRecipients(updatedRecipients);
  };

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
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor, index) => (
            <tr key={index}>
              <td>{donor.name}</td>
              <td>{donor.bloodGroup}</td>
              <td>{donor.lastDonationDate}</td>
              <td>{donor.status}</td>
              <td>
                {donor.status === 'Pending' && (
                  <>
                    <button onClick={() => handleApproveDonor(index)}>Approve</button>
                    <button onClick={() => handleRejectDonor(index)}>Reject</button>
                  </>
                )}
              </td>
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
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((recipient, index) => (
            <tr key={index}>
              <td>{recipient.name}</td>
              <td>{recipient.bloodGroup}</td>
              <td>{recipient.requestDate}</td>
              <td>{recipient.status}</td>
              <td>
                {recipient.status === 'Pending' && (
                  <>
                    <button onClick={() => handleApproveRecipient(index)}>Approve</button>
                    <button onClick={() => handleRejectRecipient(index)}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;