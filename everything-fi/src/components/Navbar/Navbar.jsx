import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="app__navbar">
        <div className="app__navbar-logo">
            app_logo
          {/* <img src={} alt="app__logo" /> */}
        </div>
        <ul className="app__navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#awards">Awards</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">Log In / Registration</a>
          <div />
          <a href="/" className="p__opensans">Book Table</a>
        </div>
      </nav>
    );
  };

export default Navbar