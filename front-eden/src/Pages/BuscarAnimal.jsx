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
} from '@mui/material';
import DataTable from '../Components/DataTableAnimales';

import '../styles/BuscarAnimal.css';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: '#EAE0D5',
  borderRadius: 0,

  '&: hover': {
    backgroundColor: '#93493A'
  }
}));




export default function BuscarAnimal() {

  const [Tipo, setTipo] = React.useState('');

  const handleChange = (event) => {
    setTipo(event.target.value);
  }

  return (
    <div className='FullCont'>
      <MenuArriba />
        <div className='contenedor-buscar-animal'>
          <div className='buscar-contenedor'>
            <Stack 
            direction='row' 
            spacing={2}
            
            >
              <FormControl variant="filled" sx={{ minWidth: 400, backgroundColor: 'rgba(226, 226, 226, 0.95)' }}>
                <InputLabel id="demo-simple-select-filled-label">Tipo de busqueda</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Tipo}
                  label="Age"
                  onChange={handleChange}
                  sx={{ width: '70rem', backgroundColor: 'rgba(226, 226, 226, 0.95)', ":hover":{backgroundColor: 'rgba(226, 226, 226, 0.95)'}}}
                >
                  <StyledMenuItem value={10}>Identificador</StyledMenuItem>
                  <StyledMenuItem value={20}>Nombre</StyledMenuItem>

                </Select>
              </FormControl>
              <TextField id="outlined-basic" variant="filled" label="Busqueda..." sx={{backgroundColor: 'rgba(226, 226, 226, 0.95)'}}/>
            </Stack>
          </div>
          <div className='tabla-container'>
            <DataTable />
          </div>
        </div>
    </div>
  )
}

