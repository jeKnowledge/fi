import React from 'react';
import images from '../../constants/images'
import './Onde.css'

const Onde = () => {
    return (
        <onde className="app_onde app_bg">
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
        </onde>
    )
}

export default Onde;