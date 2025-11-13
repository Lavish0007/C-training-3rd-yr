import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Login">Login</Link></li>
        
        <li><Link to="/ABES-CE(2025-26)/BookApp/src/components/Login.jsx">Register</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <h2>Book App</h2>
    </div>
  );
}

export default Nav;
