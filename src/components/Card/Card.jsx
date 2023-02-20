import React from "react";
import "./Card.css"

function Card({ pic, name, text }) {
    return (
        <div className={"card-container"} >
            <div className="card-content">

                <div className="card-pic">
                    <img src={pic} alt='ya' />
                </div>
                <div className="card-text">
                    <div className="card-name">
                        <h3>{name}</h3>
                    </div>

                    <div className="card-body">
                        <p>{text}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card