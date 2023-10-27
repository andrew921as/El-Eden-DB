import React from 'react'
import '../styles/CardCatalog.css';

export default function CardCatalog({nombreAnimal, foto}) {
    return (
        <div className="card">
            <div className="card-details">
                <img className="card-image" src={foto} alt='animal'/>
                <p className="text-title">{nombreAnimal}</p>
            </div>
            <button className="card-button">Patrocinar</button>
        </div>
    )
}
