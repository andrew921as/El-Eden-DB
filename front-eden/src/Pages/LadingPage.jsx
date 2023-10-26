import React from 'react';
import animales_landingPage from '../Images/Fondo_login.png';
import Icono from '../Images/IconoSinTitulo.png';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import koala from '../Images/FondoKoala.png';
import CardCatalog from '../Components/CardCatalog';
import Fondo_Mapache from '../Images/Fondo_Mapache.png';
import { useNavigate } from 'react-router-dom';

import '../styles/LandingPage.css';

export default function LadingPage() {
    const navigate = useNavigate();
    return (
        <div className='mainContaier-landingPage'>
            <div className='container-hero-landingPage'>
                <img
                    className='img-landingPage'
                    src={animales_landingPage}
                    alt="HeroSection"
                />
                <div className='filter'>
                    <button className='login-button' onClick={() => navigate('/Login')}><span><VpnKeyIcon /></span>Login</button>
                    <img className='img-logo-landingPage' src={Icono} alt="IconoOso" />
                    <div>
                        <p className='title-landingPage'>Bienvenido al eden <br /> <span className='message-landingPage'>El lugar donde los animales son felices</span></p>
                    </div>
                </div>
            </div>
            <div className='body-landingPage'>
                <div className='info-landingPage'>
                    <p className='introduction-title-ladingPage'>¿Quienes somos?</p>
                    <p className='introduction-ladingPage'>Este es un distinguido santuario destinado a la preservación
                        de la vida de animales necesitados. Te invitamos a formar parte de nuestra noble
                        causa a través de generosas donaciones o considerando el apadrinamiento de uno de nuestros queridos animales.</p>
                </div>
                <img className='introduction-image-landingPage' src={koala} alt="Koala" />
            </div>
            <div className='catalogo-landingPage'>
                <p className='introduction-title-ladingPage'>Patrocina alguno de nuestros animales</p>
                <div className='cards-catalogo-landingPage'>
                    <CardCatalog nombreAnimal='Mapache' foto={Fondo_Mapache}/>
                </div>
            </div>
        </div>
    );
}
