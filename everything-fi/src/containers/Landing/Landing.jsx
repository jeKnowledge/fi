import React from 'react'
import { Navbar,Footer } from '../../components'
import { Home, About } from '../'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <Home />
      <div className="sticky">
        <Navbar />
      </div>
      <About />
    </div>
  )
}

export default Landing