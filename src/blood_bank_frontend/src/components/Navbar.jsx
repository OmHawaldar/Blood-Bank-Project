import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/request">💉 Request Blood</Link></li>
        <li><Link to="/inventory">📦 Blood Inventory</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
