import React from "react";
import "./Footer.css"; // You can add your CSS styles here

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="content-container">
        <div className="logo-container">
          <img src="logo.png" alt="Appsight Logo" className="logo" />
        </div>
        <nav className="nav-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/pre-launch" className="nav-link">
            Pre Launch
          </a>
          <a href="/post-launch" className="nav-link">
            Post Launch
          </a>
          <a href="/our-story" className="nav-link">
            Our Story
          </a>
        </nav>
        <div className="button-container">
          <button className="deployed-button">Deployed</button>
          <button className="undeployed-button">Undeployed</button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          Copyright © 2024 Appsight. All rights reserved.|Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default Footer;
