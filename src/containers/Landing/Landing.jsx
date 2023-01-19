import React from 'react'
import { Navbar, Footer } from '../../components'
import { Home, About, Podcast, Temas} from '../'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <Home />
      <div className="sticky">
        <Navbar />
      </div>
      <About />
      <Temas />
      <Podcast />
      <div className='bg-gradientfooter'></div>
      <Footer />
    </div>
  )
}

export default Landing