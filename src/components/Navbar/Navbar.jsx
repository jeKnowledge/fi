/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { images } from '../../constants';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.icon} alt="navbar_icon" />
      </div>
      <div className="navbar-pt-en">
        <a style={{ fontWeight: 500, borderBottom: "1px solid white" }}>PT</a>
        <a>EN</a>
      </div>
    </nav>
  );
};

export default Navbar