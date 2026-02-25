import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.svg'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="logo" className="navbar-logo" />
          <span className="navbar-brand">Home</span>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
