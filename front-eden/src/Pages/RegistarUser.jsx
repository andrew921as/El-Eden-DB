import React from 'react'
import { Button, Container, Grid, Stack, TextField, Typography, Box, ThemeProvider, useTheme, useMediaQuery} from '@mui/material';
import theme from '../styles/Theme';
import { useNavigate } from 'react-router-dom';


import { useFormik } from 'formik';

import MenuArriba from '../Components/MenuArriba';

import '../styles/RegistrarUsu.css';


export default function RegistarUser() {


  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Nombre: '',
      Apellido: '',
      Email: '',
      Direccion: '',
      Telefono: '',
      Cedula: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className='RegistrarUsuCont'>
      <MenuArriba />
      <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ flexDirection: "column", alignContent: "right", paddingTop: 8, paddingLeft: 10 }}>
        <Box sx={{ width: 700, backgroundColor: '#EAE0D5', padding: 1, borderRadius: '15px' }}>
          <Stack spacing={8} justifyContent="center" direction={'column'}
            alignItems={'center'}>

              <Typography alignSelf={'center'} variant='h1' color={'#881600'}>Registrar nuevo usuario</Typography>

            <form onSubmit={formik.handleSubmit}>
              <Grid container rowSpacing={6}>
                <Grid item xs={12} md={6}>
                  <Container>
                    <TextField fullWidth id="Nombre" label="Nombre" variant="filled" name='Nombre' value={formik.values.Nombre} onChange={formik.handleChange} />
                  </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Container>
                    <TextField fullWidth id="Apellido" label="Apellido" variant="filled" name='Apellido' value={formik.values.Apellido} onChange={formik.handleChange} />
                  </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Container>
                    <TextField fullWidth id="Email" label="E-mail" variant="filled" name='Email' value={formik.values.Email} onChange={formik.handleChange} />
                  </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Container>
                    <TextField fullWidth id="Direccion" label="Direccion" variant="filled" name='Direccion' value={formik.values.Direccion} onChange={formik.handleChange} />
                  </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Container>
                    <TextField fullWidth id="Telefono" label="Télefono" variant="filled" name='Telefono' value={formik.values.Telefono} onChange={formik.handleChange} />
                  </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Container>
                    <TextField fullWidth id="Cedula" label="Cedula" variant="filled" name='Cedula' value={formik.values.Cedula} onChange={formik.handleChange} />
                  </Container>
                </Grid>
              </Grid>
              <Stack direction={'row'} spacing={4} justifyContent={'space-between'} sx={{ paddingTop: 5 }}>
                <Container>
                  <Button
                    variant="outlined"
                    size='medium'
                    fullWidth
                    onClick={() => { navigate('/') }}
                    sx={{border: '3px solid #881600', borderRadius: 10, ':hover':{border: '3px solid #881600'}}}

                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: 20,
                          sm: 20,
                          md: 30,
                          lg: 30,
                          xl: 30
                        }
                      }}
                      color={'#881600'}
                    >
                      Cancelar
                    </Typography>
                  </Button>
                </Container>
                <Container>
                  <Button
                    variant="outlined"
                    size='medium'
                    fullWidth
                    type='submit'
                    sx={{border: '3px solid #881600', borderRadius: 10, ':hover':{border: '3px solid #881600'}}}

                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: 20,
                          sm: 20,
                          md: 30,
                          lg: 30,
                          xl: 30
                        }
                      }}
                      color={'#881600'}
                    >
                      Guardar
                    </Typography>
                  </Button>
                </Container>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Grid>
      </ThemeProvider>
    </div>
  )
}

//
//<TextField id="Nombre" label='Filled' variant='Filled'></TextField>