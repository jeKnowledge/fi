import React from "react";
import "./Card.css"

function Card({title, text}){
    return (
            <div className="card-container" >
                <div className="card-content">
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
    )
}

export default Card