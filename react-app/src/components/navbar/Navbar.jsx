import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ backgroundColor, linkColor, logoSrc="http://localhost:3000/images/Logo-02.png"}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" style={{ backgroundColor }}>
      <div className="logo">
        <img src={logoSrc} alt="App Sight Logo" className="mr-2" />
      </div>
      <div className="burger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`links ${menuOpen ? 'open' : ''}`} style={{ '--link-color': linkColor }}>
        <li><Link to="/" style={{ color: linkColor }}>Home</Link></li>
        <li><Link to="/pre-launch" style={{ color: linkColor }}>Pre Launch</Link></li>
        <li><Link to="/post-launch" style={{ color: linkColor }}>Post Launch</Link></li>
        <li><Link to="/our-story" style={{ color: linkColor }}>Our Story</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
