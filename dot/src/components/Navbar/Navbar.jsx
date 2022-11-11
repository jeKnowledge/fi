import React from 'react';
import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {

    return (
        <nav className = "app_navbar app_bg">
        <div className='app_navbar_logo'>
            <img src ={images.logo} alt = "app logo" />
        </div>
        <div className="app_navbar_components">
        <ul className = "app_navbar_links">
            <li>
                <a href="/Evento" className= "nav_letter" >O Evento</a>
            </li>
            <li >
                <a href="/Onde" className= "nav_letter">Onde</a>
            </li>

            <li >
                <a href="/Organizacao" className = "nav_letter">Organização</a>
            </li>
            <li >
            <a href="/Faq" className = "nav_letter">FAQ</a>
            </li>
        </ul>
        </div>
        <div className="app_navbar_box">
            <li>
                <a href = "/Inscricao" className="app_navbar_inscricao">Inscrição</a>
            </li>
        </div>
    
    
        
        
        
    </nav>
    )
}

export default Navbar;