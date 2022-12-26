import React from 'react'
import { Navbar,Footer } from '../../components'
import { Home, About } from '../'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
        <Navbar />
        <Home />
        <About />
        <Footer />
    </div>
  )
}

export default Landing