import React from 'react'
import { Navbar } from '../../components'
import { Home, About } from '../'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
        <Navbar />
        <Home />
        <About />
    </div>
  )
}

export default Landing