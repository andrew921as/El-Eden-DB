import * as React from 'react';
import ButtonHome from '../Components/ButtonHome'
import '../styles/Home.css';
import {
  Stack, Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  ThemeProvider,
  MenuItem,
  useTheme,
  styled,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import PersonIcon from '@mui/icons-material/Person';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PetsIcon from '@mui/icons-material/Pets';
import StoreIcon from '@mui/icons-material/Store';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

import MenuArriba from '../Components/MenuArriba';
import themeHome from '../styles/ThemeHome';


const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: '800px',
  [theme.breakpoints.down('md')]: {
    width: '500px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '300px'
  },
}));

function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
    
  return (
    <div className='Contenedor-principal'>
      <MenuArriba />
      <ThemeProvider theme={themeHome}>
        <div className='Contenedor-buttones'>
          <Stack
            spacing={6}
            direction={'column'}
            alignItems={match ? 'center' : 'flex-start'}
            sx={{paddingBottom:30, paddingTop:8}}
          >

            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <PersonIcon sx={{ fontSize: '2.7rem' }} />
                <Typography>Cliente</Typography>
              </AccordionSummary>
              <AccordionDetails>

                <StyledMenuItem onClick={() => {navigate('/Registro-Usuario')} }><ChevronRightIcon fontSize='1.5rem' />Registrar</StyledMenuItem>
                <StyledMenuItem ><ChevronRightIcon fontSize='1.5rem' />Buscar</StyledMenuItem>

              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <HandshakeIcon sx={{ fontSize: '2.7rem' }} />
                <Typography>Voluntarios</Typography>
              </AccordionSummary>
              <AccordionDetails>
              
                <StyledMenuItem onClick={() => {navigate('/Registro-Voluntario')} }><ChevronRightIcon fontSize='1.5rem' />Registrar</StyledMenuItem>
                <StyledMenuItem><ChevronRightIcon fontSize='1.5rem' />Buscar</StyledMenuItem>

              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <PetsIcon sx={{ fontSize: '2.7rem' }} />
                <Typography>Animal</Typography>
              </AccordionSummary>
              <AccordionDetails>

                <StyledMenuItem onClick={() => navigate('/Registro-Animal')}><ChevronRightIcon fontSize='1.5rem' />Registrar</StyledMenuItem>
                <StyledMenuItem onClick={() => navigate('/Buscar-Animal')}><ChevronRightIcon fontSize='1.5rem' />Buscar</StyledMenuItem>

              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <StoreIcon sx={{ fontSize: '2.7rem' }} />
                <Typography>Caja</Typography>
              </AccordionSummary>
              <AccordionDetails>

                <StyledMenuItem><ChevronRightIcon fontSize='1.5rem' />Registrar Pago</StyledMenuItem>
                <StyledMenuItem><ChevronRightIcon fontSize='1.5rem' />Buscar Transacción</StyledMenuItem>

              </AccordionDetails>
            </Accordion>
          </Stack>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Home