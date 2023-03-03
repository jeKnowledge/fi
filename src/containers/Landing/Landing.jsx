import React from 'react'
import { Navbar, Footer } from '../../components'
import { Home, About, Podcast, Temas,Partners,Team,Faq } from '../'


import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <Home />
      <Navbar />
      <About />
      <Temas />
      <Podcast />
      <Faq/>
      <Partners/>

      <div className='bg-gradientfooter'></div>
      <Footer />
    </div>
  )
}

export default Landing