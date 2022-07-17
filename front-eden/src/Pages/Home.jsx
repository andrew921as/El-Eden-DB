import React from 'react';
import ButtonHome from '../Components/ButtonHome'
import MenuArriba from '../Components/MenuArriba';
import Footer from '../Components/Footer';

import { Stack} from '@mui/material';
import { GiPolarBear } from "react-icons/gi";
import { IoSearchCircleSharp, IoPersonAddSharp } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";

import '../styles/Home.css';

function Home() {
  return (
    <div className='Contenedor-principal'>
      <MenuArriba/>
      <div className='Contenedor-buttones'>
        <Stack 
        spacing={7} 
        direction={'column'} 
        alignItems={'flex-start'}
        >
        <ButtonHome
        texto={'Registrar Cliente'}
        icono={<IoPersonAddSharp/>}
        />
        <ButtonHome
        texto={'Pago'}
        icono={<BsCashCoin/>}
        />
        <ButtonHome
        texto={'Buscar animal'}
        icono={<IoSearchCircleSharp size='50px'/>}
        />
         <ButtonHome
        texto={'Registrar animal'}
        icono={<GiPolarBear size='50px'/>}
        />
        
        </Stack>

      </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Footer/>
    </div>
  )
}

export default Home