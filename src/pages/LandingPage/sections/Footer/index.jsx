import React from 'react';

import logo from '../../assets/logosaas.png';
import { Twitter, Instagram, Linkedin, AArrowDown, Youtube } from 'lucide-react';
import './index.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo-container">
          <img src={logo} height={40} width={40} alt="SaaS Logo" className="logo" />
        </div>
        <nav className="footer-nav">
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Features</a>
          <a href="#" className="footer-link">Customers</a>
          <a href="#" className="footer-link">Pricing</a>
          <a href="#" className="footer-link">Help</a>
          <a href="#" className="footer-link">Careers</a>
        </nav>
        <div className="social-links">
          <Twitter className="social-icon" />
          <Instagram className="social-icon" />
          <Linkedin className="social-icon" />
          <Youtube className="social-icon" />
        </div>
        <p className="copyright">&copy; 2024 CropIntel AI. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;