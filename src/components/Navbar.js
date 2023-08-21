import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa'; // Import the download, bars (hamburger), and times (close) icons
import './Navbar.css';
import signatureLogo from '../assets/images/signature.png';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={signatureLogo} alt="Signature Logo" className="navbar-logo" />
        
        {/* Menu Toggle Button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuActive ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`menu-backdrop ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>

        <div className={`nav-links ${menuActive ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">
            <Link to="projects" smooth={true} duration={1000}>
              Projects
            </Link>
          </a>
          <a href='#contact'>
          <Link to="contact" smooth={true} duration={1000}>
             Contact
          </Link>
          </a>
          <a href="https://drive.google.com/file/d/19r0FT6C_YfKfGzLFG6u4_bWWtMtf0Ud4/view?usp=sharing" download="Aryaman_Sinha_Resume.pdf" target="_blank">
            Resume <FaDownload />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
