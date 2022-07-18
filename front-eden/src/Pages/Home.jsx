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
import MenuArriba from '../Components/MenuArriba';
import themeHome from '../styles/ThemeHome';
import PersonIcon from '@mui/icons-material/Person';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PetsIcon from '@mui/icons-material/Pets';
import StoreIcon from '@mui/icons-material/Store';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  console.log(match);

  return (
    <div className='Contenedor-principal'>
      <ThemeProvider theme={themeHome}>
        <MenuArriba />
        <div className='Contenedor-buttones'>
          <Stack
            spacing={4}
            direction={'column'}
            alignItems={match ? 'center' : 'flex-end'}
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

                <StyledMenuItem><ChevronRightIcon fontSize='1.5rem' />Registrar Cliente</StyledMenuItem>
                <StyledMenuItem><ChevronRightIcon fontSize='1.5rem' />Buscar</StyledMenuItem>

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

                  <StyledMenuItem><ChevronRightIcon fontSize='1.5rem' />Registrar</StyledMenuItem>
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

                  <StyledMenuItem><ChevronRightIcon fontSize='1.5rem' />Registrar</StyledMenuItem>
                  <StyledMenuItem><ChevronRightIcon fontSize='1.5rem' />Buscar</StyledMenuItem>

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
                  <StyledMenuItem><ChevronRightIcon fontSize='1.5rem' />Buscar</StyledMenuItem>

              </AccordionDetails>
            </Accordion>
          </Stack>


        </div>
      </ThemeProvider>
    </div>
  )
}

export default Home