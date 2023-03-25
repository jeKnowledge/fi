import React, { useState } from 'react'
import { images } from '../../constants';

import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleListVisible = () => {
    setToggleMenu(!toggleMenu);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky">
      <nav className="navbar-gen">
        <div className="navbar">
          <div className="navbar-logo">
            <img src={images.icon} alt="navbar_icon" />
          </div>
          <div id='nav-icon3' className={`icon ${isOpen ? 'open' : ''}`} onClick={() => { handleIconClick(); handleListVisible() }}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div />
        </div>

        {toggleMenu && (
          <ul className="navbar-links">
            <li><a href="/#">Parceiros</a></li>
            <li><a href="/#">Podcast</a></li>
            <li><a href="/#">Evento</a></li>
            <li><a href="/#">Equipa</a></li>
            <li><a href="/#">Contactos</a></li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar