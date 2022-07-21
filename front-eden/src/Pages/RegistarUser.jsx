import React from 'react'
import { Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useFormik} from 'formik';

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
      Telefono:'',
      Cedula:''
    },
    onSubmit:(values)=>{
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className='RegistrarUsuCont'>
      <MenuArriba />
      <Stack spacing={8} justifyContent="center">
        <Typography alignSelf={'center'} variant='h1' color={'#ff5c0c'}>Registrar usuario</Typography>
        <form onSubmit={formik.handleSubmit}>
            <Grid container rowSpacing={6}>
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField fullWidth id="Nombre" label="Nombre" variant="filled" name='Nombre' value={formik.values.Nombre} onChange={formik.handleChange}/>
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField fullWidth id="Apellido" label="Apellido" variant="filled" name='Apellido' value={formik.values.Apellido} onChange={formik.handleChange}/>
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField fullWidth id="Email" label="E-mail" variant="filled" name='Email' value={formik.values.Email} onChange={formik.handleChange}/>
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField fullWidth id="Direccion" label="Direccion" variant="filled" name='Direccion' value={formik.values.Direccion} onChange={formik.handleChange}/>
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField fullWidth id="Telefono" label="Télefono" variant="filled" name='Telefono' value={formik.values.Telefono} onChange={formik.handleChange}/>
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField fullWidth id="Cedula" label="Cedula" variant="filled" name='Cedula' value={formik.values.Cedula} onChange={formik.handleChange}/>
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
          </form>
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

//
//<TextField id="Nombre" label='Filled' variant='Filled'></TextField>