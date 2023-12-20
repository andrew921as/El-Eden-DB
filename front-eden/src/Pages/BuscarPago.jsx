import React, { useEffect, useState } from 'react'
import MenuArriba from '../Components/MenuArriba';
import PagosTable from '../Components/DataTablePagos';
import ButtonBack from '../Components/ButtonBack';


import {busquedas, getPagos } from '../Functions/SqlFunctions';

import '../styles/BuscarAnimal.css';

export default function BuscarPago() {

  const [pagos, setPagos] = useState([]);

  const todosDatos = async () => {
    console.log("Pagos")
    await getPagos();
    setPagos(busquedas)
    //  console.log("Lospagos tan aca"+pagos)
  }
  
  useEffect(() => {
    todosDatos();
  }, [])

  return (
    <div className='FullCont'>
      <MenuArriba />
      <ButtonBack />
      <div className='contenedor-buscar-animal'>   
        <div className='tabla-container'>
          <PagosTable datosBd={pagos}/>
        </div>
      </div>
    </div>
  )
}