import React from 'react'
import '../styles/CardCatalog.css';
import foto from "../Images/FondoKoala.png"

import { useNavigate } from 'react-router-dom';

export default function CardCatalog({animal}) {

    // console.log("ID", animal)
    const navigate = useNavigate();
    return (
        <div className="card">
            <div className="card-details">
                <img className="card-image" src={animal.Image} alt='animal'/>
                <p className="text-title">{animal.Nombre}</p>
            </div>
            <button className="card-button" onClick={() => navigate('/Registro-Pago/?id='+ animal.id)}>Patrocinar</button>
        </div>
    )
}
