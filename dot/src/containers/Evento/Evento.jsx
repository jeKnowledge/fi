import React from 'react'
import {Navbar,Footer} from '../../components'
import images from '../../constants/images'
import './Evento.css'

const Evento = () => {
    
    return (
      
        <div className="app_evento app_bg ">
           
           <Navbar/>
           <div className="app_evento_conteudo">
            <div className="app_evento_descricao nav_letter">

            <h1 className="nav_letter">o primeiro<br/> hackathon de<br/> Data Science &<br/> Machine Learning<br/> em Coimbra.</h1>
            <p className="nav_letter">16 e 17 de outubro<br/> de 2021</p>
            </div>
            <div className="app_evento_imagem">
                <img src = {images.logo_frontpage} alt= "front page" />
            </div>
            </div>
            
            <Footer/> 
          
        </div>
    )
}

export default Evento