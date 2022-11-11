import React from 'react';
import images from '../../constants/images'
import './Footer.css'

const Footer = () => {

    return (
        <footer className="app_footer">
            <div className='app_footer_contactos'>
            <h1 className="nav_letter">Contactos</h1>
                <div className="contacto_1 nav_letter">
                    <h2>edson.david@jeknowledge.com</h2>
                    <p>+351911932684</p>
                    <h2>marianafpn@gmail.com</h2>
                    <p>+351965716190</p>
                </div>
            </div>
            <div className="app_footer_criado nav_letter">
                <h1>Criado por</h1>
            </div>
            <div className="app_footer_patrocinios">
                <h1 className="nav_letter">Patrocínios </h1>
                <div className="app_footer_deloitte"> 
                    <img src= {images.deloitte_logo} alt="deloitte logo" />
                </div>
                <div className="app_footer_images">
                    <img src= {images.quebratour_logo} alt="quebratour logo"/>
                    <img src= {images.void_logo} alt="void logo"/>
                    <img src= {images.ydata_logo} alt="ydata logo"/>   
                </div>
                <div className="app_footer_dei">
                   <img src= {images.dei_logo} alt="dei logo"/> 
                </div>

            </div>
        </footer>


    )
}
    
export default Footer;