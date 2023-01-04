import React from 'react'
import { Navbar,Footer } from '../../components'
import { Home, About, Podcast } from '../'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <Home />
      <div className="sticky">
        <Navbar />
      </div>
      <About />
      <Podcast />
      <Footer />
    </div>
  )
}

export default Landing