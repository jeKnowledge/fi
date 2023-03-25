import React from 'react'
import { Navbar, Footer } from '../../components'
import { Home, About, Podcast, Temas, Podcasts,Faq } from '../'

import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <Home />
      <Navbar />
      <About />
      <Temas />
      <Faq />
      <Podcasts />
      <div className='bg-gradientfooter'></div>
      <Footer />
    </div>
  )
}

export default Landing