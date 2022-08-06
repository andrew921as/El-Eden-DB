import { React, useState } from 'react'
import { Button, Container, Grid, Stack, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { useFormik } from 'formik';

import MenuArriba from '../Components/MenuArriba';

import { createAnimal } from '../Functions/SqlFunctions';

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
      Observaciones: '',
      Talla: '',
      Estado: ''
    },
    onSubmit: (values) => {
      let animalData = JSON.stringify(values, null, 2)
      alert(animalData);
      // const nombre = JSON.parse(animalData).Nombre
      // const tipo = JSON.parse(animalData).Tipo
      // const talla = JSON.parse(animalData).Talla
      // const edad = JSON.parse(animalData).Edad
      // const motivoIngreso = JSON.parse(animalData).MotivoI
      // const observaciones = JSON.parse(animalData).Observaciones
      // const estado = JSON.parse(animalData).Estado
      // const fechaI = JSON.parse(animalData).FechaI
      // const fechaS = JSON.parse(animalData).FechaS
      // createAnimal('008', nombre, talla, edad, tipo, motivoIngreso, observaciones, estado, fechaI, fechaS);
    }
  });

  const [valueI, setValueI] = useState(new Date('2014-08-18T21:11:54'));

  const handleChangeI = (newValue) => {
    setValueI(newValue);
  };

  const [valueS, setValueS] = useState(new Date('2014-08-18T21:11:54'));

  const handleChangeS = (newValue) => {
    setValueS(newValue);
  };


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
        <Stack
          spacing={8}
          justifyContent="center"
          direction={'column'}
          alignItems={'center'}
          sx={{ paddingBottom: 4, paddingTop: 3 }}>
          <Typography alignSelf={'center'} variant='h1' color={'#881600'}>Registrar nuevo animal</Typography>
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
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      id="Calendario I"
                      label="Fecha de ingreso"
                      inputFormat="MM/dd/yyyy"
                      value={formik.values.FechaI}
                      onChange={(val) => {
                        formik.setFieldValue("FechaI", val);
                      }}
                      renderInput={(params) =>
                        <TextField
                          fullWidth
                          name='FechaI'
                          id="FechaI"
                          label="Fecha Ingreso"
                          inputVariant="filled"
                          format="MM/dd/yyyy"
                          {...params}
                          />}
                    />
                  </LocalizationProvider>
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      id= "Calendario S"
                      label="Fecha de salida"
                      inputFormat="MM/dd/yyyy"
                      value={formik.values.FechaS}
                      onChange={(val) => {
                        formik.setFieldValue("FechaS", val);
                      }}
                      renderInput={(params) =>
                        <TextField
                          fullWidth
                          name='FechaS'
                          id="FechaS"
                          label="Fecha Salida"
                          inputVariant="filled"
                          format="MM/dd/yyyy"
                          {...params} />}
                    />
                  </LocalizationProvider>
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
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField fullWidth id="Talla" label="Talla" variant="filled" name='Talla' value={formik.values.Talla} onChange={formik.handleChange} />
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                  <TextField sx={{ minHeight: 6 }} fullWidth id="Estado" label="Estado" variant="filled" name='Estado' value={formik.values.Estado} onChange={formik.handleChange} />
                </Container>
              </Grid>
            </Grid>
            <Stack direction={'row'} spacing={4} justifyContent={'space-between'} sx={{ paddingTop: 7 }}>
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
                  sx={{ border: '3px solid #881600', borderRadius: 10, ':hover': { border: '3px solid #881600' } }}
                  variant='outlined'
                  size='medium'
                  fullWidth
                  type='submit'
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

