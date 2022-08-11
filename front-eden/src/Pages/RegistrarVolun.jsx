import React from 'react'
import { Button, Container, Grid, Stack, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';

import MenuArriba from '../Components/MenuArriba';

import ButtonBack from '../Components/ButtonBack';

import { createVoluntario } from '../Functions/SqlFunctions';

import '../styles/RegistrarUsu.css';


export default function RegistrarVolun() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Nombre: '',
      Cedula: '',
      Cargo: '',
      Telefono: '',
      UsserName: '',
      Password:'',

    },
    onSubmit: (values) => {
        let volunteerData = JSON.stringify(values, null, 2)
        alert(volunteerData);
        const nombre = JSON.parse(volunteerData).Nombre
        const cedula = JSON.parse(volunteerData).Cedula
        const cargo = JSON.parse(volunteerData).Cargo
        const telefono = JSON.parse(volunteerData).Telefono
        const usuario = JSON.parse(volunteerData).UsserName
        const contrasena = JSON.parse(volunteerData).Password

        /* createAnimal('008', nombre, talla, edad, tipo, motivoIngreso, observaciones, estado, fechaI, fechaS);*/
        createVoluntario(nombre,cedula,cargo,telefono,usuario,contrasena);
          //createPatrocinador('59485217', 'Carlos', 'Carloscaceres', 'carlitos@carlitos.com','3156421563', 'larga', 'primer', '56-56','albergue');
       }
  });

  return (
    <div className='RegistrarUsuCont'>
      <MenuArriba />
      <ButtonBack/>
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
        <Stack spacing={4}
          justifyContent="center"
          >
          <Typography alignSelf={'center'} variant='h1' color={'#881600'}>Registrar Voluntario</Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack
              spacing={6}
              justifyContent="center"
              alignItems="center"
            >
              <Container>
                <TextField fullWidth id="Nombre" label="Nombre" variant="filled" name='Nombre' value={formik.values.Nombre} onChange={formik.handleChange} />
              </Container>

              <Container>
                <TextField fullWidth id="Cedula" label="Cedula" variant="filled" name='Cedula' value={formik.values.Cedula} onChange={formik.handleChange} />
              </Container>


              <Container>
                <TextField fullWidth id="Cargo" label="Cargo" variant="filled" name='Cargo' value={formik.values.Cargo} onChange={formik.handleChange} />
              </Container>

              <Container>
                <TextField fullWidth id="Telefono" label="Télefono" variant="filled" name='Telefono' value={formik.values.Telefono} onChange={formik.handleChange} />
              </Container>
              

              <Stack spacing={4}
              direction='row'
              justifyContent="center"
              >
                <TextField fullWidth id="UsserName" label="Nombre de usuario" variant="filled" name='UsserName' value={formik.values.UsserName} onChange={formik.handleChange} />
                <TextField fullWidth id="Password" label="Contraseña" type="password" variant="filled" name='Password' value={formik.values.Password} onChange={formik.handleChange} />
              </Stack>
            </Stack>
            <Stack direction={'row'} spacing={4} justifyContent={'space-between'} sx={{ paddingTop: 5, paddingBottom: 5 }}>
              <Container>
                <Button
                  variant="outlined"
                  size='medium'
                  fullWidth
                  onClick={() => { navigate('/') }}
                  sx={{ border: '3px solid #881600', borderRadius: 10, ':hover': { border: '3px solid #881600' } }}
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
                  sx={{ border: '3px solid #881600', borderRadius: 10, ':hover': { border: '3px solid #881600' } }}
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
    </div>
  )
}
