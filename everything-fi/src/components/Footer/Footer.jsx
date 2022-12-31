import React from 'react';
import images from '../../constants/images'
import './Footer.css'

const Footer = () => {

    return (
        <footer className="app_footer">
            <div className="app_footer_informacao">
            <div className="mobile_div">
                <div className='app_footer_contactos'>

                    <h1 className="text_footer_header">Contactos</h1>
                    <h2>E-mail</h2>
                    <a href="mailto:geral@everything-fi.com">geral@everything-fi.com</a>

                </div>
                <div className="app_footer_organizacao">
                    <h1 className="text_footer_header">Organização</h1>
                    <div className="logos">
                        <img src={images.jek_logo} alt="nei logo"></img>
                        <img src={images.nei_logo} alt="nei logo"></img>

                    </div>
                </div>
            </div>
            <div className="app_footer_logos">
                <h1>
                    <a href="https://www.instagram.com/_everything.fi_/"><img src={images.insta} alt="insta logo"></img></a>
                    <a><img src={images.linkedin} alt="linkedin logo"></img></a>
                    <a><img src={images.spotify} alt="spotify logo"></img></a>
                    <a><img src={images.tiktok} alt="tiktok logo"/></a>
                   
                    <a href="" ><img src={images.youtube} alt="Tutorialspoint"/></a>
                </h1>
            </div>
            </div>
            <div className="text">
                    <p >This website is © everything.fi 2022.</p>
                </div>
        </footer>


    )
}

export default Footer;