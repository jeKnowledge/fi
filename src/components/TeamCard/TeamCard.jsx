import React from "react";
import "./TeamCard.css"

const direcao = [
  {
    name: "Miguel Santana",
    job: "Coordenador"
  },
  {
    name: "Eduardo Nunes",
    job: "Coordenador"
  }
]

const imagem = [
  {
    name: "Inês Galvão",
    job: "Coordenadora"
  },
  {
    name: "Ana Sofia Santos",
    job: "Colaboradora"
  },
  {
    name: "Bárbara Teixeira",
    job: "Colaboradora"
  },
  {
    name: "Bernardo Arzileiro",
    job: "Colaborador"
  },
  {
    name: "Vasco Bastos",
    job: "Colaborador"
  }
]

const informatica = [
  {
    name: "Francisco Macedo",
    job: "Colaborador"
  },
  {
    name: "Hugo Barros",
    job: "Colaborador"
  },
  {
    name: "Pedro Coimbra",
    job: "Colaborador"
  }
]

const logistica = [
  {
    name: "João Carnide",
    job: "Coordenador"
  },
  {
    name: "Carlos Matos",
    job: "Colaborador"
  },
  {
    name: "Mariana Magueijo",
    job: "Colaboradora"
  }
]

const comunicacao = [
  {
    name: "Rita Oliveira",
    job: "Coordenadora"
  },
  {
    name: "Carolina Roma",
    job: "Colaboradora"
  },
  {
    name: "Mafalda Figueiredo",
    job: "Colaboradora"
  }
]

const parcerias = [
  {
    name: "Lucas & Anjo",
    job: "Coordenador"
  },
  {
    name: "Nuno Tiago",
    job: "Colaborador"
  },
  {
    name: "Rodrigo Pato",
    job: "Colaborador"
  }
]

const podcast = [
  {
    name: "Carolina Resende",
    job: "Colaboradora"
  },
  {
    name: "Sofia Yankova",
    job: "Colaboradora"
  }
]

const tesouraria = [
  {
    name: "Sofia Meireles",
    job: "Coordenadora"
  }
]

function TeamCard({ title, text, id }) {
  return (
    <div className={"teamcard-container " + "teamcard-" + id} >
      <div className="teamcard-content">
        <div className="teamcard-title">
          <h3>{title}</h3>
        </div>
        <div className="teamcard-body">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamCard