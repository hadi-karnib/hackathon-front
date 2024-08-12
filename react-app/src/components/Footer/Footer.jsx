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
            Pre Trial
          </a>
          <a href="/post-launch" className="nav-link">
            Post Trial
          </a>
          <a href="/our-story" className="nav-link">
            Our Story
          </a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p className="copyright-text">
          © 2024 Your Company Name. All rights reserved.|Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
