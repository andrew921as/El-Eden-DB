import React from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from '@mui/material';
import '../styles/Login.css';
import iconoOso from '../Images/IconoOso.png'
import { useNavigate } from 'react-router-dom';
import ForestIcon from '@mui/icons-material/Forest';;


function Login() {
  const navigate = useNavigate();
  const match = useMediaQuery('(min-height: 900px)');
  return (
    <div className="Contenedor-login">
      <Box
        sx={{
          backgroundColor: 'rgba(226, 226, 226, 0.65)',
          boxShadow: '0 0 1rem 0 rgba(0,0,0, 0.2)',
          borderRadius: '10px',
          backdropFilter: 'blur( 5px )',
          width: {
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: '35%',
            xl: '35%'
          },
          padding: '2rem',
          flexDirection: "column",
          alignContent: "right",
          borderRadius: '30px',
          height: '95%',
          maring: '5px',
        }}>

        <Stack
          spacing={match ? 10 : 5}
          justifyContent="center"
          direction={'column'}
          alignItems={'center'}
        >
          <Box>
            <img className='Icono-main' src={iconoOso} />
          </Box>
          <Box sx={{display: 'flex', gap: 2}}>
          <ForestIcon fontSize="large" />
            <Typography variant="h1" sx={{ fontWeight: 3 }}>User Login</Typography>
          </Box>
          <Box sx={{ width: '80%', display: 'flex' }}>
            <TextField
              fullWidth id="User"
              label="Username"
              variant="filled"
              name='Username'
              sx={{ background: '#fff' }}
            />
          </Box>
          <Box sx={{ width: '80%' }}>
            <TextField
              fullWidth
              id="password"
              label="password"
              variant="filled"
              name='password'
              sx={{ background: '#fff' }}
            />
          </Box>
          <Box sx={{ alignItems: 'center', justifyContent: 'center', width: '80%' }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#F25019', width: '100%', height: '50px' }}
              onClick={() => navigate('/')}
            >
              Sign In
            </Button>
          </Box>
        </Stack>

      </Box>
    </div>
  )
}

export default Login;