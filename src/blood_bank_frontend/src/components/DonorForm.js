import React, { useState } from "react";
import bloodBank from "../api";

function DonorForm() {
  const [name, setName] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await bloodBank.register_donor(name, bloodType);
    setMessage(result);
  };

  return (
    <div>
      <h2>Donate Blood</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Blood Type" value={bloodType} onChange={(e) => setBloodType(e.target.value)} required />
        <button type="submit">Donate</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default DonorForm;
