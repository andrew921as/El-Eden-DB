import React from 'react'
import { Button, Container, Grid, Stack, TextField, Typography, Box, ThemeProvider, useTheme, useMediaQuery, InputLabel, MenuItem, FormControl, Select} from '@mui/material';
import { useNavigate } from 'react-router-dom';


import { useFormik } from 'formik';

import MenuArriba from '../Components/MenuArriba';

import { createPatrocinador } from '../Functions/SqlFunctions';

import '../styles/RegistrarUsu.css';


export default function RegistarUser() {


  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Nombre: '',
      Apellido: '',
      Email: '',
      TipoVia: '',
      Calle:'',
      Casa:'',
      Telefono: '',
      Cedula: ''
    },
      onSubmit: (values) => {
          let userData = JSON.stringify(values, null, 2)
          alert(userData);
          const cedula = JSON.parse(userData).Cedula
          const nombre = JSON.parse(userData).Nombre
          const apellido = JSON.parse(userData).Apellido
          const correo = JSON.parse(userData).Email
          const telefono = JSON.parse(userData).Telefono
          const tipo_via = JSON.parse(userData).TipoVia
          const numero_calle = JSON.parse(userData).Calle
          const numero_casa = JSON.parse(userData).Casa

          /* createAnimal('008', nombre, talla, edad, tipo, motivoIngreso, observaciones, estado, fechaI, fechaS);*/
          createPatrocinador(cedula, nombre, apellido, correo, telefono, tipo_via, numero_calle, numero_casa, 'albergue');
          //createPatrocinador('59485217', 'Carlos', 'Carloscaceres', 'carlitos@carlitos.com','3156421563', 'larga', 'primer', '56-56','albergue');
      }
  });

  return (
    <div className='RegistrarUsuCont'>
      <MenuArriba />
        <Box sx={{ 
        width: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '45%',
          xl: '45%'
        }, 
        backgroundColor: 'rgba(226, 226, 226, 0.95)', 
        paddingTop: 5, 
        borderRadius: '15px', 
        flexDirection: "column", 
        alignContent: "right", 
        marginTop: {
          xs: 0,
          sm: 0,
          md: 0,
          lg: 8,
          xl: 8
        },
        marginLeft: {
          xs: 0,
          sm: 0,
          md: 0,
          lg: 15,
          xl: 15
        }

        }}>
      <Grid container component="main">

          <Stack 
          spacing={8} 
          justifyContent="center" 
          direction={'column'}
          alignItems={'center'}
          sx={{paddingBottom:4, paddingTop:3}}
          >

              <Typography alignSelf={'center'} variant='h1' color={'#881600'}>Registrar nuevo usuario</Typography>

            <form onSubmit={formik.handleSubmit}>
              <Grid container rowSpacing={6}>
                <Grid item xs={11} md={3.5}>
                  <Container>
                    <TextField fullWidth id="Nombre" label="Nombre" variant="filled" name='Nombre' value={formik.values.Nombre} onChange={formik.handleChange} />
                  </Container>
                </Grid>
                <Grid item xs={11} md={3.5}>
                  <Container>
                    <TextField fullWidth id="Apellido" label="Apellido" variant="filled" name='Apellido' value={formik.values.Apellido} onChange={formik.handleChange} />
                  </Container>
                </Grid>
                <Grid item xs={11} md={5}>
                  <Container>
                    <TextField fullWidth id="Email" label="E-mail" variant="filled" name='Email' value={formik.values.Email} onChange={formik.handleChange} />
                  </Container>
                </Grid>
                <Grid item md={4}>
                <Container>
                  <FormControl fullWidth variant="filled" sx={{ backgroundColor: 'rgba(226, 226, 226, 0.95)' }}>
											<InputLabel id="TipoVia">Via</InputLabel>
											  <Select
												  labelId="TipoVia"
												  id="TipoVia"
												  name='TipoVia'
                          value={formik.values.TipoVia}
												  label="Tipo de via"
                          onChange={formik.handleChange}
											>
												  <MenuItem sx={{ borderRadius: 0 }} value={"Autopista"}>Autopista</MenuItem>
												  <MenuItem sx={{ borderRadius: 0 }} value={"Avenida"}>Avenida</MenuItem>
                          <MenuItem sx={{ borderRadius: 0 }} value={"Bulevar"}>Bulevar</MenuItem>
                          <MenuItem sx={{ borderRadius: 0 }} value={"Calle"}>Calle</MenuItem>
                          <MenuItem sx={{ borderRadius: 0 }} value={"Carrera"}>Carrera</MenuItem>
                          <MenuItem sx={{ borderRadius: 0 }} value={"Diagonal"}>Diagonal</MenuItem>
											  </Select>
										  </FormControl>
                    </Container>
                  </Grid>
                  <Grid item md={4}>
                    <Container>
                    <TextField fullWidth id="Calle" label="# Calle" variant="filled" name='Calle' value={formik.values.Calle} onChange={formik.handleChange} />
                    </Container>
                  </Grid>
                  <Grid item md={4}>
                    <Container>
                    <TextField fullWidth id="Casa" label="# Casa" variant="filled" name='Casa' value={formik.values.Casa} onChange={formik.handleChange}/>
                    </Container>
                  </Grid>
                <Grid item xs={11} md={6}>
                  <Container>
                    <TextField fullWidth id="Telefono" label="Télefono" variant="filled" name='Telefono' value={formik.values.Telefono} onChange={formik.handleChange} />
                  </Container>
                </Grid>
                <Grid item xs={11} md={6}>
                  <Container>
                    <TextField fullWidth id="Cedula" label="Cedula" variant="filled" name='Cedula' value={formik.values.Cedula} onChange={formik.handleChange} />
                  </Container>
                </Grid>
              </Grid>
              <Stack direction={'row'} spacing={2} justifyContent={'space-between'} sx={{ paddingTop: 5 }}>
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
          </Grid>
        </Box>
    </div>
  )
}

//
//<TextField id="Nombre" label='Filled' variant='Filled'></TextField>