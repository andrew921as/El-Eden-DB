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
  IconButton,
  useMediaQuery,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PetsIcon from '@mui/icons-material/Pets';
import StoreIcon from '@mui/icons-material/Store';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import iconoOso from '../Images/IconoOso.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuArriba from '../Components/MenuArriba';
import themeHome from '../styles/Theme';


const StyledAcordion = styled(Accordion)(({ theme }) => ({

  width: '30rem',
  [theme.breakpoints.down('md')]: {
    width: '25rem'
  },
  [theme.breakpoints.down('1100')]: {
    width: '20rem'
  },
  [theme.breakpoints.down('sm')]: {
    width: '17rem'
  },

}));

function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  return (
    <div className='Contenedor-principal'>
      <ThemeProvider theme={themeHome}>
        <div className='Contenedor-buttones'>
          <div className='contenedor-logoff'>
            <IconButton aria-label="log-off" sx={{ gap: 2, borderRadius: 0, color: '#d84707' }}><ArrowBackIcon />Sign off</IconButton>
          </div>
          <div className='Contenedor-icono'>
            <img className='Icono-main' src={iconoOso} />
            <Typography sx={{ fontSize: '1.8rem', color: '#d84707', fontWeight: 3 }} >Bienvenido, Andrew921as</Typography>
          </div>
          <Stack
            spacing={2}
            direction={'column'}
            alignItems={'center'}
            sx={{ padding: 4 }}
          >
            <StyledAcordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
                <PersonIcon sx={{ fontSize: '2.7rem' }} />
                <Typography>Clientes</Typography>
              </AccordionSummary>
              <AccordionDetails>

                <MenuItem onClick={() => navigate('/Registro-Usuario')}>
                  <ChevronRightIcon fontSize='1.5rem' />Registrar nuevo cliente
                </MenuItem>
                <MenuItem ><ChevronRightIcon fontSize='1.5rem' />Buscar cliente</MenuItem>

              </AccordionDetails>
            </StyledAcordion>

            <StyledAcordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
                <HandshakeIcon sx={{ fontSize: '2.7rem' }} />
                <Typography>Voluntarios</Typography>
              </AccordionSummary>
              <AccordionDetails>

                <MenuItem onClick={() => navigate('/Registro-Voluntario')}><ChevronRightIcon fontSize='1.5rem' />Añadir nuevo voluntario</MenuItem>
                <MenuItem><ChevronRightIcon fontSize='1.5rem' />Buscar voluntario</MenuItem>

              </AccordionDetails>
            </StyledAcordion>

            <StyledAcordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
                <PetsIcon sx={{ fontSize: '2.7rem' }} />
                <Typography>Animales</Typography>
              </AccordionSummary>
              <AccordionDetails>

                <MenuItem onClick={() => navigate('/Registro-Animal')}>
                  <ChevronRightIcon fontSize='1.5rem' />Registrar nuevo animal
                </MenuItem>
                <MenuItem onClick={() => navigate('/Buscar-Animal')}>
                  <ChevronRightIcon fontSize='1.5rem' />Buscar animal
                </MenuItem>
              </AccordionDetails>

            </StyledAcordion>

            <StyledAcordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" expandIcon={<ExpandMoreIcon />}>
                <StoreIcon sx={{ fontSize: '2.7rem' }} />
                <Typography>Caja</Typography>
              </AccordionSummary>
              <AccordionDetails>

                <MenuItem>
                  <ChevronRightIcon fontSize='1.5rem' />Pago
                </MenuItem>
                <MenuItem>
                  <ChevronRightIcon fontSize='1.5rem' />Buscar transacción
                </MenuItem>

              </AccordionDetails>
            </StyledAcordion>

          </Stack>

        </div>
      </ThemeProvider>

    </div>
  )
}

export default Home