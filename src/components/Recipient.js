// src/components/Recipient.js
import React, { useState } from 'react';

function Recipient() {
  const [requests, setRequests] = useState([]);
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [requestDate, setRequestDate] = useState('');

  const handleRequest = (e) => {
    e.preventDefault();
    setRequests([...requests, { name, bloodGroup, requestDate }]);
    setName('');
    setBloodGroup('');
    setRequestDate('');
  };
  return (
    <div>
      <h1>Recipient Page</h1>
      <form onSubmit={handleRequest}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Blood Group:</label>
          <input type="text" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required />
        </div>
        <div>
          <label>Request Date:</label>
          <input type="date" value={requestDate} onChange={(e) => setRequestDate(e.target.value)} required />
        </div>
        <button type="submit">Request Blood</button>
      </form>
      <h2>Request History</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Request Date</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.name}</td>
              <td>{request.bloodGroup}</td>
              <td>{request.requestDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Recipient;
  