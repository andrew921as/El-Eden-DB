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
  ThemeProvider,
} from '@mui/material';
import theme from '../styles/Theme';
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
    <div>
      <MenuArriba />
      <ThemeProvider theme={theme}>
        <div className='contenedor-buscar-animal'>
          <div className='buscar-contenedor'>
            <Stack direction='row' spacing={2}>
              <FormControl variant="filled" sx={{ minWidth: 400 }}>
                <InputLabel id="demo-simple-select-filled-label">Tipo de busqueda</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Tipo}
                  label="Age"
                  onChange={handleChange}
                  sx={{ width: '70rem'}}
                >
                  <StyledMenuItem value={10}>Identificador</StyledMenuItem>
                  <StyledMenuItem value={20}>Nombre</StyledMenuItem>
                  <StyledMenuItem value={30}>Fecha Ingreso</StyledMenuItem>
                  <StyledMenuItem value={40}>Fecha  Salida</StyledMenuItem>
                </Select>
              </FormControl>
              <TextField id="outlined-basic" variant="filled" label="Busqueda..." />
            </Stack>
          </div>
          <div className='tabla-container'>
            <DataTable />
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

