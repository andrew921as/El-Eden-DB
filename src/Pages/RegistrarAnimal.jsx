import { React, useState } from 'react'
import { Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { KeyboardDatePicker } from '@material-ui/pickers'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { useFormik } from 'formik';

import MenuArriba from '../Components/MenuArriba';

import '../styles/RegistrarUsu.css';


export default function RegistarAnimal() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Nombre: '',
      Tipo: '',
      Edad: '',
      MotivoI: '',
      FechaI: '',
      FechaS: '',
      Observaciones: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className='RegistrarUsuCont'>
      <MenuArriba />
      <Stack spacing={8} justifyContent="center">
        <Typography alignSelf={'center'} variant='h1' color={'#ff5c0c'}>Registrar Animal</Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container rowSpacing={6}>
            <Grid item xs={12} md={4}>
              <Container>
                <TextField fullWidth id="Nombre" label="Nombre" variant="filled" name='Nombre' value={formik.values.Nombre} onChange={formik.handleChange} />
              </Container>
            </Grid>
            <Grid item xs={12} md={4}>
              <Container>
                <TextField fullWidth id="Tipo" label="Tipo" variant="filled" name='Tipo' value={formik.values.Tipo} onChange={formik.handleChange} />
              </Container>
            </Grid>
            <Grid item xs={12} md={4}>
              <Container>
                <TextField fullWidth id="Edad" label="Edad" variant="filled" name='Edad' value={formik.values.Edad} onChange={formik.handleChange} />
              </Container>
            </Grid>
            <Grid item xs={12} md={6}>
              <Container>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    fullWidth
                    id="FechaI"
                    label="Fecha Ingreso"  
                    inputVariant="filled"
                    format="MM/dd/yyyy"
                    value={formik.values.FechaI}
                    onChange={(val) => {
                      formik.setFieldValue("FechaI", val);
                    }}
                   
                  />
                </MuiPickersUtilsProvider>
              </Container>
            </Grid>
            <Grid item xs={12} md={6}>
              <Container>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    fullWidth
                    id="FechaS"
                    label="Fecha salida"  
                    inputVariant="filled"
                    format="MM/dd/yyyy"
                    value={formik.values.FechaS}
                    onChange={(val) => {
                      formik.setFieldValue("FechaS", val);
                    }}
                   
                  />
                </MuiPickersUtilsProvider>
              </Container>
            </Grid>
            <Grid item xs={12} md={6}>
              <Container>
                <TextField fullWidth id="MotivoI" label="Motivo Ingreso" variant="filled" name='MotivoI' value={formik.values.MotivoI} onChange={formik.handleChange} />
              </Container>
            </Grid>
            <Grid item xs={12} md={6}>
              <Container>
                <TextField sx={{ minHeight: 6 }} fullWidth id="Observaciones" label="Observaciones" variant="filled" name='Observaciones' value={formik.values.Observaciones} onChange={formik.handleChange} />
              </Container>
            </Grid>
          </Grid>
          <Stack direction={'row'} spacing={4} justifyContent={'space-between'} sx={{ paddingTop: 7 }}>
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
                  Registrar
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

