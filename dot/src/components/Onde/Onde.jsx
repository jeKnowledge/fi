import React from 'react';
import images from '../../constants/images'
import Navbar from '../Navbar/Navbar'
import './Onde.css'

const Onde = () => {
    return (
        <div className="app_onde app_bg">
            <Navbar/>
            <div className="app_onde_text">
                <div className="app_onde_header">
                    Departamento de
                    Engenharia Informática da
                    Universidade de Coimbra
                </div>
                <div className="app_onde_under">
                    Um local que dispõe de condições ideais para a dinamização de um evento tão diversificado de modo organizado através de variadas salas, auditórios e espaços de convívio, para trabalhar, discutir e conviver durante todo o evento.
                </div>
            </div>
            <div className="app_onde_dei">
                <img src={images.dei} alt="dei" />
            </div>
        </div>
    )
}

export default Onde;