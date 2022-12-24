import React from 'react'
import images from '../../constants';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.icon} alt="navbar_icon" />
      </div>
      <div className="navbar-pt-en">
        <a href="#PT">PT</a>
        <a href="#EN">EN</a>
      </div>
    </nav>
  );
};

export default Navbar