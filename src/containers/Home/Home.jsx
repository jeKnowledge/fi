import React from 'react'
import images from '../../constants'
import './Home.css'

function Home() {
    return (
        <section className="Home">
            <div className="home-logo">
                <img src={images.logo} alt="everything-fi logo" />
            </div>
            <div className="home-sub-heading">
                literacia financeira simplificada
            </div>
            <div className='wrapperGradient'>
                <video src={images.bg_video} id='video' loop autoPlay muted alt="background video"/>
            </div>
        </section>
    )
}

export default Home