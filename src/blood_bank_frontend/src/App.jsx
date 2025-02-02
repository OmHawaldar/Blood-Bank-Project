import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Add Navbar first

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Keep Home but comment out others */}
        {/* <Route path="/donate" element={<DonorForm />} /> */}
        {/* <Route path="/request" element={<RequestBlood />} /> */}
        {/* <Route path="/inventory" element={<Inventory />} /> */}
      </Routes>
    </Router>
  );
}

export default App;