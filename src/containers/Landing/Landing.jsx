import React from 'react'
import { Navbar, Footer } from '../../components'
import { Home, About, Podcast, Temas, Podcasts } from '../'

import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <Home />
      <Navbar />
      <About />
      <Temas />
      <Podcasts />
      <div className='bg-gradientfooter'></div>
      <Footer />
    </div>
  )
}

export default Landing