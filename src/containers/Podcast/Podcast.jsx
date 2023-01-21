import React from 'react'
import './Podcast.css'
import Fade from 'react-reveal/Fade';

const Podcast = () => {

    return (
        <section className="app_podcast">
            <Fade delay={400}>
                <h1>HIGHLIGHTS PODCAST</h1>
                <span className='color_g_brev'>BREVEMENTE...</span>
                <span>Mantenha-se atualizado! Visite as nossas redes sociais e fique a par de tudo o que estamos a planear para si. Siga-nos e aprenda connosco a atingir a estabilidade financeira que tanto procura!</span>
            </Fade>
        </section>
    )
}

export default Podcast;