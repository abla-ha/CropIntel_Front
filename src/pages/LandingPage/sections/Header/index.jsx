import React from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import Logo from '../../assets/logosaas.png';
import './index.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="top-banner">
        <p className="banner-text">
          Precision Agriculture through AI Excellence
        </p>
        <Link to='/login'>
        <a className="banner-link">
          <p>Get started</p>
          <ArrowRight className="arrow-icon" />
        </a>
        </Link>
      </div>
      <div className="main-header">
        <div className="container-header">
          <div className="header-content">
            <img src={Logo} alt="Saas Logo" height={40} width={40} />
            <Menu className="menu-icon" />
            <nav className="main-nav">
              <a href="#" className="nav-link">About</a>
              <a href="#" className="nav-link">Features</a>
              <a href="#" className="nav-link">Customers</a>
              <a href="#" className="nav-link">Updates</a>
              <a href="#" className="nav-link">Help</a>
              <Link to='/login'>
                <a  className="cta-button-header">
                  Get For Free
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;