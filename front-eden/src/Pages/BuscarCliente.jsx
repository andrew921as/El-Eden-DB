import React from 'react'
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

import DataTable from '../Components/DataTableClientes';

import { useFormik } from 'formik';

import { getPatrocinadores } from '../Functions/SqlFunctions';

import '../styles/BuscarAnimal.css';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: '#EAE0D5',
  borderRadius: 0,

  '&: hover': {
    backgroundColor: '#93493A'
  }
}));




export default function BuscarCliente() {

  const formik = useFormik({
    initialValues: {
      TipoDato: '',
      Dato: '',
    },
      onSubmit: (values) => {
        let userData = JSON.stringify(values, null, 2)
          alert(getPatrocinadores());
      }
  });


  const [Tipo, setTipo] = React.useState('');

  const handleChange = (event) => {
    setTipo(event.target.value);
  }

  return (
    <div className='FullCont'>
      <MenuArriba />
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
                  sx={{ width: '70rem', backgroundColor: 'rgba(226, 226, 226, 0.95)', ":hover":{backgroundColor: 'rgba(226, 226, 226, 0.95)'}}}
                >
                  <StyledMenuItem value={"Identificador"}>Identificador</StyledMenuItem>
                  <StyledMenuItem value={"Nombre"}>Nombre</StyledMenuItem>

                </Select>
              </FormControl>
              <TextField name="Dato" id="TextoBusqueda" variant="filled" label="Busqueda..." value={formik.values.Dato} onChange={formik.handleChange} sx={{backgroundColor: 'rgba(226, 226, 226, 0.95)'}}/>
              <Button variant='contained' type='submit'> Buscar</Button>
            </Stack>
          </form>
          </div>
          <div className='tabla-container'>
            <DataTable />
          </div>
        </div>
    </div>
  )
}

