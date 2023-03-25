import React from 'react'
import { images, team } from '../../constants'
import { Card } from '../../components'
import './Team.css'


const direcao = {
  "edu": { name: "Eduardo Nunes", text: "Coordenador", pic: team.edu },
  "santana": { name: "Miguel Santana", text: "Coordenador", pic: team.santana }
}

const imagem = {
  "vasco": { name: "Vasco Bastos", text: "Coordenador", pic: team.bastos },
  "sofia": { name: "Ana Sofia", text: "Colaboradora", pic: team.ana },
  "bernardo": { name: "Bernardo Arzileiro", text: "Colaborador", pic: team.benny },
  "barbara": { name: "Bárbara Teixeira", text: "Colaboradora", pic: team.barbara }
}

const informatica = {
  "pedro": { name: "Pedro Coimbra", text: "Colaborador", pic: team.coimbra },
  "hugo": { name: "Hugo Barros", text: "Colaborador", pic: team.hugo },
  
}

const logistica = {
  "carnide": { name: "João Carnide", text: "Coordenador", pic: team.carnide },
  "carlos": { name: "Carlos Matos", text: "Colaborador", pic: team.carlos },
  "magueijo": { name: "Mariana Magueijo", text: "Colaboradora", pic: team.magueijo }
}

const marketing = {
  "rita": { name: "Ana Oliveira", text: "Coordenadora", pic: team.rita },
  "carolina": { name: "Carolina Roma", text: "Colaboradora", pic: team.roma },
  "mafralda": { name: "Mafalda Figueiredo", text: "Colaboradora", pic: team.mafralda }
}

const parcerias = {
  "lucasanjo": { name: "Lucas Anjo", text: "Coordenador", pic: team.anjo },
  "planes": { name: "André Silva", text: "Colaborador", pic: team.edu },
  "nuno": { name: "Nuno Tiago", text: "Colaborador", pic: team.nuno },
  "pato": { name: "Rodrigo Pato", text: "Colaborador", pic: team.pato }
}

const podcast = {
  "carolinares": { name: "Carolina Resende", text: "Colaboradora", pic: team.resende },
  "soph": { name: "Sofia Yankova", text: "Colaboradora", pic: team.soph }
}

const tesouraria = {
  "meireles": { name: "Sofia Meireles", text: "Tesoureira", pic: team.meireles }
}


function Team() {

  const pelouros = [
    { title: 'DIREÇÃO', data: direcao },
    { title: 'IMAGEM', data: imagem },
    { title: 'INFORMÁTICA', data: informatica },
    { title: 'LOGÍSTICA', data: logistica },
    { title: 'MARKETING E COMUNICAÇÃO', data: marketing },
    { title: 'PARCERIAS', data: parcerias },
    { title: 'PODCAST', data: podcast },
    { title: 'TESOURARIA', data: tesouraria }
  ];

  return (
    <div className="Team" id='topo'>
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
        {pelouros.map((pelouro, index) => (
          <div className="team-pelouro" key={index}>
            <h1>{pelouro.title}</h1>
            <div className="team-card-component">
              {Object.keys(pelouro.data).map((key, index) => (
                <Card
                  name={pelouro.data[key].name}
                  text={pelouro.data[key].text}
                  pic={pelouro.data[key].pic}
                  key={index}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="team-backtotop">
        <a href="#top">voltar ao topo da página</a>
        <div className="arrow" />
      </div>
    </div>
  )
}

export default Team