import React from 'react'
import { Navbar, Footer } from '../../components'
import { Home, About, Podcast, Temas, Faq } from '../'
import Fade from 'react-reveal/Fade';

import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <Home />
      <Navbar />
      
      <Fade delay={500}>
        <About />
      </Fade>

      <Fade delay={500}>
        <Temas />
      </Fade>
      <Podcast />
      <div className='bg-gradientfooter'></div>
      <Footer />
    </div>
  )
}

export default Landing