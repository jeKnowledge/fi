import React from 'react'
import './Home.css'
import Temas from "../../components/Temas/Temas";

export default function Home() {
    return (
        <section id='Home'>
            <div className="Home center">
                <Temas/>
            </div>
        </section>
    )
}
