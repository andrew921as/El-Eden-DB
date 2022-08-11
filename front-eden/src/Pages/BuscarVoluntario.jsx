import React, { useEffect, useState } from 'react'
import MenuArriba from '../Components/MenuArriba';
import {
  Stack,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  styled,
  Button,
} from '@mui/material';
import VolutariosTable from '../Components/DataTableVoluntarios';

import ButtonBack from '../Components/ButtonBack';

import { useFormik } from 'formik';

import { getVoluntarios, busquedas, getAllVoluntarios } from '../Functions/SqlFunctions';

import '../styles/BuscarAnimal.css';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: '#EAE0D5',
  borderRadius: 0,

  '&: hover': {
    backgroundColor: '#93493A'
  }
}));




export default function BuscarVoluntario() {

  const [voluntario, setVoluntario]=useState([]);
  const [Tipo, setTipo] = React.useState('');

    const formik = useFormik({
        initialValues: {
            TipoDato: '',
            Dato: '',
        },
        onSubmit: async (values) => {
            let volunData = JSON.stringify(values, null, 2)
            const tipoBusqueda = JSON.parse(volunData).TipoDato;
            const dato = JSON.parse(volunData).Dato
            await getVoluntarios(tipoBusqueda, dato, false);
            setVoluntario(busquedas)
        }
    });

  

  const handleChange = (event) => {
    setTipo(event.target.value);
  }

  const todosDatos = async()=> {
    await getAllVoluntarios();
    setVoluntario(busquedas)
  }

  useEffect(()=>{
   todosDatos();
  },[])

  return (
    <div className='FullCont'>
      <MenuArriba />
      <ButtonBack/>
        <div className='contenedor-buscar-animal'>
          <div className='buscar-contenedor'>
                  <form onSubmit={formik.handleSubmit}>
                      <Stack
                          direction='row'
                          spacing={2}

                      >
                          <FormControl variant="filled" sx={{ minWidth: 400, backgroundColor: 'rgba(226, 226, 226, 0.95)' }}>
                              <InputLabel id="Tipobusqueda">Tipo de busqueda</InputLabel>
                              <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={formik.values.TipoDato}
                                  label="Age"
                                  name="TipoDato"
                                  onChange={formik.handleChange}
                                  sx={{ width: '70rem', backgroundColor: 'rgba(226, 226, 226, 0.95)', ":hover": { backgroundColor: 'rgba(226, 226, 226, 0.95)' } }}
                              >
                                  <StyledMenuItem value={"Identificador"}>Identificador</StyledMenuItem>
                                  <StyledMenuItem value={"Nombre"}>Nombre</StyledMenuItem>

                              </Select>
                          </FormControl>
                          <TextField name="Dato" id="TextoBusqueda" variant="filled" label="Busqueda..." value={formik.values.Dato} onChange={formik.handleChange} sx={{ backgroundColor: 'rgba(226, 226, 226, 0.95)' }} />
                          <Button variant='contained' type='submit'> Buscar</Button>
                      </Stack>
                  </form>
          </div>
          <div className='tabla-container'>
            <VolutariosTable datosBd={voluntario}/>
          </div>
        </div>
    </div>
  )
}
