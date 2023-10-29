import React from 'react'
import '../styles/CardCatalog.css';
import foto from "../Images/FondoKoala.png"

export default function CardCatalog({animal}) {
    return (
        <div className="card">
            <div className="card-details">
                <img className="card-image" src={foto} alt='animal'/>
                <p className="text-title">{animal.Tipo}</p>
            </div>
            <button className="card-button">Patrocinar</button>
        </div>
    )
}
