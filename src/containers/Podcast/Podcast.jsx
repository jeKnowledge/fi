import React from 'react'
import './Podcast.css'
import Fade from 'react-reveal/Fade';

const Podcast = () => {

    return (
        <Fade delay={400}>
            <section className="app_podcast">
                <div className='content'>
                    <h1>HIGHLIGHTS PODCAST</h1>
                    <h4 className='color_g_brev'>BREVEMENTE...</h4>
                    <p>Mantem-te atualizado! Visita as nossas redes sociais e fica a par de tudo o que estamos a planear para ti.  Segue-nos e aprende connosco a atingir a estabilidade financeira que tanto procuras!</p>
                </div>
            </section>
        </Fade>
    )
}

export default Podcast;