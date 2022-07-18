import React from 'react'
import { Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useFormik, Form, FormikProvider } from 'formik';

import MenuArriba from '../Components/MenuArriba';
import Footer from '../Components/Footer';

import '../styles/RegistrarUsu.css';


export default function RegistarUser() {

  const navigate = useNavigate();

  const formProp = useFormik({
    initialValues: {
      Nombre: '',
      Apellido: '',
      Email: '',
      Direccion: '',
      Telefono:'',
      Cedula:''
    },
    onSubmit:(values)=>{
      console.log(values)
    }
  });

  return (
    <div className='RegistrarUsuCont'>
      <MenuArriba />
      <Stack spacing={8} justifyContent="center">
        <Typography alignSelf={'center'} variant='h1' color={'#ff5c0c'}>Registrar usuario</Typography>
        <FormikProvider value={formProp}>
          <Form>
            <Grid container rowSpacing={6}>
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField fullWidth id="Nombre" label="Nombre" variant="filled" name='Nombre' />
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField fullWidth id="Apellido" label="Apellido" variant="filled" name='Apellido' />
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField fullWidth id="Email" label="E-mail" variant="filled" name='Email' />
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField fullWidth id="Direccion" label="Direccion" variant="filled" name='Direccion' />
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField fullWidth id="Telefono" label="Télefono" variant="filled" name='Telefono' />
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField fullWidth id="Cedula" label="Cedula" variant="filled" name='Cedula' />
                </Container>
              </Grid>
            </Grid>
            <Stack direction={'row'} spacing={4} justifyContent={'space-between'} sx={{ paddingTop: 5 }}>
              <Container>
                <Button
                  variant="text"
                  size='large'
                  fullWidth
                  onClick={() => { navigate('/') }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 30,
                        sm: 30,
                        md: 50,
                        lg: 50,
                        xl: 50
                      }
                    }}
                    color={'#ff5c0c'}
                  >
                    Salir
                  </Typography>
                </Button>
              </Container>
              <Container>
                <Button
                  variant="text"
                  size='large'
                  fullWidth
                  type='submit'
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 30,
                        sm: 30,
                        md: 50,
                        lg: 50,
                        xl: 50
                      }
                    }}
                    color={'#ff5c0c'}
                  >
                    Enviar
                  </Typography>
                </Button>
              </Container>
            </Stack>
          </Form>
        </FormikProvider>
      </Stack>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

//<Item>2</Item>
//<TextField id="Nombre" label='Filled' variant='Filled'></TextField>