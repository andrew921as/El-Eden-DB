import React from 'react';
import ButtonHome from '../Components/ButtonHome'
import '../styles/Home.css';
import { Stack, Typography } from '@mui/material';
import { GiPolarBear } from "react-icons/gi";
import { IoSearchCircleSharp } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { IoPersonAddSharp } from "react-icons/io5";

import MenuArriba from '../Components/MenuArriba';

function Home() {
  return (
    <div className='Contenedor-principal'>
      <MenuArriba/>
      <div className='Contenedor-buttones'>
        <Stack 
        spacing={4} 
        direction={'column'} 
        alignItems={'flex-end'}
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

    </div>
  )
}

export default Home