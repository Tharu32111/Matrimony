import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      {/* Top Info Bar */}
      <div className="info-bar">
        <div className="info-content">
          <div className="contact-info">
            <span><i className="fas fa-phone"></i> +91 98765 43210</span>
            <span><i className="fas fa-envelope"></i> info@eshamatrimony.com</span>
          </div>
          <div className="social-icons">
            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="logo-link">
              <span className="logo-text">Eshama Matrimony</span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/membership" className="nav-link">Membership Plan</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </nav>

          {/* Action Buttons */}
          <div className="header-actions">
            <Link to="/login" className="btn-login">Login</Link>
            <Link to="/register" className="btn-register">Register</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;