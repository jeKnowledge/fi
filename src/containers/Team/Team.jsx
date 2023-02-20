import React from 'react'
import { images, team } from '../../constants'
import { Card } from '../../components'
import './Team.css'

function Team() {
    return (
        <div className="Team">
            <div className="team-gradient" />

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
                <div className="team-pelouro">
                    <h1>DIREÇÃO</h1>
                    <div className="team-card-component">
                        <Card name='Eduardo Nunes' text='Coordenador' pic={team.edu} />
                        <Card name='Miguel Santana' text='Coordenador' pic={team.santana} />
                    </div>
                </div>
                <div className="team-imagem">
                    <h1>IMAGEM</h1>
                    <div className="team-card-component">
                        <Card name='Ana Sofia' text='Coordenador' pic={team.santana} />
                        <Card name='Bernardo Arzileiro' text='Coordenador' pic={team.edu} />
                        <Card name='Bárbara Teixeira' text='Coordenador' pic={team.edu} />
                        <Card name='Vasco Bastos' text='Coordenador' pic={team.edu} />
                    </div>
                </div>
                {/* Insert Team Cards here */}
                <div className="team-informatica">
                    <h1>INFORMÁTICA</h1>
                    <div className="team-card-component">
                        <Card name='Hugo Barros' text='Coordenador' pic={team.edu} />
                        <Card name='Pedro Coimbra' text='Coordenador' pic={team.edu} />
                    </div>
                </div>
                {/* Insert Team Cards here */}
                <h1>lOGÍSTICA</h1>
                {/* Insert Team Cards here */}
                <h1>MARKETING E COMUNICAÇÃO</h1>
                {/* Insert Team Cards here */}
                <h1>PARCERIAS</h1>
                {/* Insert Team Cards here */}
                <h1>PODCAST</h1>
                {/* Insert Team Cards here */}
                <h1>TESOURARIA</h1>
                {/* Insert Team Cards here */}
            </section>
        </div>
    )
}

export default Team