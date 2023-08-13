import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import signatureLogo from '../assets/images/signature.png'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
      <img src={signatureLogo} alt="Signature Logo" className="navbar-logo" />
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">
        <Link to="projects" smooth={true} duration={1000}>
          Projects
        </Link></a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
