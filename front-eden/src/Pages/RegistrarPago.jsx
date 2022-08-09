import React, { useEffect, useState } from 'react'
import { Button, Container, Grid, Stack, TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import { useFormik } from 'formik';

import MenuArriba from '../Components/MenuArriba';

import '../styles/RegistrarUsu.css';

import { clientId, clientName, getClientDataP } from '../Functions/UtilityF';

export default function RegistrarPago() {

	const [isDonor, setIsDonor]=useState(false);
	const [selectorC, setSelectorC]=useState("");


	useEffect(() => {
		async function traemeDatos() {
			await getClientDataP({ id: "1234", name: "Julio" });
		}
		traemeDatos();
		console.log(isDonor);
		console.log(selectorC);
	});


	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			ClienteId: '',
			Nombre: '',
			MotivoP: '',
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
						sx={{ paddingBottom: 4, paddingTop: 3 }}
					>

						<Typography alignSelf={'center'} variant='h1' color={'#881600'}>Pago</Typography>

						<form onSubmit={formik.handleSubmit}>
							<Grid container rowSpacing={6}>
								<Grid item xs={11} md={6}>
									<Container>
										<TextField fullWidth id="Nombre" label="Cliente ID" variant="filled" name='Nombre' value={clientId} onChange={formik.handleChange} />
									</Container>
								</Grid>
								<Grid item xs={11} md={6}>
									<Container>
										<TextField fullWidth id="Apellido" label="Nombre Cliente" variant="filled" name='Apellido' value={clientName} onChange={formik.handleChange} />
									</Container>
								</Grid>
								<Grid item xs={11} md={6}>
									<Container>
										<FormControl fullWidth variant="filled" sx={{ backgroundColor: 'rgba(226, 226, 226, 0.95)' }}>
											<InputLabel id="demo-simple-select-filled-label">Motivo Pago</InputLabel>
											<Select
												labelId="MotivoP"
												id="MotivoP"
												name='MotivoP'
												value={selectorC}
												label="Motivo Pago"
												onChange={(value)=>{ setSelectorC(value)}}
											>
												<MenuItem sx={{ borderRadius: 0 }} value={"Albergue"}>Albergue</MenuItem>
												<MenuItem sx={{ borderRadius: 0 }} value={"Apadrinamiento"}>Apadrinamiento</MenuItem>
												<MenuItem sx={{ borderRadius: 0 }} value={"Donacion"}>Donacion</MenuItem>

											</Select>
										</FormControl>
									</Container>
								</Grid>
								<Grid item xs={11} md={6}>
									<Container>
									<Button
										variant="outlined"
										size='small'
										fullWidth
										onClick={() => { navigate('/Buscar-Animal') }}
										sx={{ border: '3px solid #881600', borderRadius: 3, ':hover': { border: '3px solid #881600' } }}

									>
										<Typography
											sx={{
												fontSize: 20
											}}
											color={'#881600'}
										>
											Seleccionar animal
										</Typography>
									</Button>
									</Container>
								</Grid>
								<Grid item xs={11} md={4}>
									<Container>
										<TextField fullWidth id="Telefono" label="Id Animal" variant="filled" name='Telefono' value={formik.values.Telefono} onChange={formik.handleChange} />
									</Container>
								</Grid>
								<Grid item xs={11} md={4}>
									<Container>
										<TextField fullWidth id="Cedula" label="Nombre Animal" variant="filled" name='Cedula' value={formik.values.Cedula} onChange={formik.handleChange} />
									</Container>
								</Grid>
								<Grid item xs={11} md={4}>
									<Container>
										<TextField fullWidth id="Cedula" label="Tipo de animal" variant="filled" name='Cedula' value={formik.values.Cedula} onChange={formik.handleChange} />
									</Container>
								</Grid>
								<Grid item xs={4} md={4}>
									<Container>
									<Button
										variant="text"
										size='small'
										fullWidth
										onClick={""}

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
											Tarifas:
										</Typography>
									</Button>
									</Container>
								</Grid>
								<Grid item xs={7} md={8}>
									<Container>
										<TextField fullWidth id="Cedula" label="Valor a pagar" variant="filled" name='Cedula' value={formik.values.Cedula} onChange={formik.handleChange} />
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
											Pagar
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
