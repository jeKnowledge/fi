import React from 'react'
import { Navbar, Footer } from '../../components'
import { Home, About, Podcast, Temas,Partners } from '../'


import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <Home />
      <Navbar />
      <About />
      <Temas />
      <Podcast />
      <Partners/>
      <div className='bg-gradientfooter'></div>
      <Footer />
    </div>
  )
}

export default Landing