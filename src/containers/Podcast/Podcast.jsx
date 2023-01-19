import React from 'react'
import './Podcast.css'
import Faq from '../Faq/Faq';

const Podcast = () => {

    return (
        <>
            <div className="app_podcast">
                <h2>HIGHLIGHTS PODCAST</h2>
                <span className='color_g_brev'>BREVEMENTE...</span>
                <span>Mantenha-se atualizado! Visite as nossas redes sociais e fique a par de tudo o que estamos a planear para si. Siga-nos e aprenda connosco a atingir a estabilidade financeira que tanto procura!</span>
                <Faq />
            </div>
        </>
    )
}

export default Podcast;