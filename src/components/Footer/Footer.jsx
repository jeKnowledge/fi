import React from 'react';
import images from '../../constants/images'
import './Footer.css'

const Footer = () => {

    return (
        <footer className="app_footer">
            <div className="app_footer_informacao">
                <div className='app_footer_contactos'>
                    <span className="text_footer_header">Contactos</span>

                    <h2>E-mail</h2>
                    <a href="mailto:geral@everything-fi.com">geral@everything-fi.com</a>

                </div>
                <div className="app_footer_organizacao">
                    <span className="text_footer_header">Organização</span>
                    <div className="logos">
                        <img src={images.jek_logo} alt="nei logo"></img>
                        <img src={images.nei_logo} alt="nei logo"></img>
                    </div>
                </div>
                <div className="app_footer_logos">
                    <a href={"https://www.instagram.com/_everything.fi_/"}><img src={images.insta} alt="insta logo"></img></a>
                    <a href={"/#"}><img src={images.linkedin} alt="linkedin logo"></img></a>
                    <a href={"/#"}><img src={images.spotify} alt="spotify logo"></img></a>
                    <a href={"/#"}><img src={images.tiktok} alt="tiktok logo" /></a>
                    <a href={"/#"}><img src={images.youtube} alt="youtube logo" /></a>
                </div>
            </div>
            <div className="text">
                <p >This website is © everything.fi 2022.</p>
            </div>
        </footer>
    )
}

export default Footer;