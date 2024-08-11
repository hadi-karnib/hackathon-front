import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ backgroundColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" style={{ backgroundColor }}>
      <div className="logo">
        <img src="http://localhost:3000/images/Logo-02.png" alt="App Sight Logo" className="mr-2" />
      </div>
      <div className="burger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pre-launch">Pre Launch</Link></li>
        <li><Link to="/post-launch">Post Launch</Link></li>
        <li><Link to="/our-story">Our Story</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
