import React from 'react'
import images from '../../constants'
import './Team.css'

function Team() {
    return (
        <div className="Team">
            <section className='team-title'>
                <div />
                <div className="team-header">
                    conhece a nossa equipa!
                </div>
                <div className="team-entities">
                    entidades envolvidas
                    <div className="team-entities-logos">
                        <img src={images.jek_logo} alt="jek_logo" />
                        <img src={images.nei_logo} alt="nei_logo" />
                    </div>
                </div>
            </section>

            <section className="team-cards">
                <h1>Direção</h1>
                {/* Insert Team Cards here */}
                <h1>Imagem</h1>
                {/* Insert Team Cards here */}
                <h1>Informática</h1>
                {/* Insert Team Cards here */}
                <h1>Logística</h1>
                {/* Insert Team Cards here */}
                <h1>Marketing e Comunicação</h1>
                {/* Insert Team Cards here */}
                <h1>Parcerias</h1>
                {/* Insert Team Cards here */}
                <h1>Podcast</h1>
                {/* Insert Team Cards here */}
                <h1>Tesouraria</h1>
                {/* Insert Team Cards here */}
            </section>
        </div>
    )
}

export default Team