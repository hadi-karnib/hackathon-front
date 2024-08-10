import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pre-launch">Pre Launch</Link></li>
        <li><Link to="/post-launch">Post Launch</Link></li>
        <li><Link to="/our-story">Our Story</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
