import React from 'react'
import './About.css'
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <Fade delay={400}>
      <section className='About'>
        <div className="about-text">
          <h3>
            Somos uma comunidade com o objetivo de fomentar a literacia financeira e focada em difundir conhecimento acerca de finanças pessoais.
            <br /> O nosso evento e podcast visam fornecer conselhos práticos e pragmáticos sobre uma vasta gama de tópicos, todos com o objetivo de te ajudar a tomar decisões financeiras informadas.
            <br />Junta-te a nós e aprende como controlar as tuas finanças e construir um futuro economicamente seguro!
          </h3>
        </div>
      </section>
    </Fade>
  )
}

export default About