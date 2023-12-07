import React, { useEffect, useState } from 'react'
import {
	Button,
	Container,
	Grid,
	Stack,
	TextField,
	Typography,
	Box,
	Dialog,
} from '@mui/material';
import { useNavigate} from 'react-router-dom';

import tarifas from '../Images/Tarifas.png';
import { useUser } from "../Components/Context";

import { useFormik } from 'formik';

import MenuArriba from '../Components/MenuArriba';

import '../styles/RegistrarUsu.css';

import { registrarPago, } from '../Functions/SqlFunctions';

import { getClientDataP, clienteCedula, clienteNombre,idAnimal,reset } from '../Functions/UtilityF';

import axios from 'axios';

export default function RegistrarPago() {

	const {user} = useUser();
	const [open, setOpen] = React.useState(false);
	const [animal, setAnimal] =  React.useState({});

	const handleClickOpen = async () => {
		setOpen(true);
		const byTarifa = 300000
		setValorTarifa(byTarifa);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const cancel = () => {
		reset();
		navigate('/Home');
	}


	async function paymentService(data) {
		const bodyContent = JSON.stringify(data)
		console.log(bodyContent)

		try {
			const response = await fetch("https://eledenapi.com/service/paymentapi/payment", { 
				method: "POST",
				body: bodyContent,
				headers: {
					"Accept": "*/*",
					"Content-Type": "application/json"
				}
			})
			const data = await response.json();
			window.location.href = data.url

		} catch(err) {
			console.log("Error:", err)
		}
	}


	async function paymentCheck(session_id) {
		try {
			const res = await fetch(`https://eledenapi.com/service/paymentapi/order?session_id=${session_id}`)
		} catch(err) {
			console.log("Error de paymentCheck:", err)
		}
	}

	const [noDonor, setNoDonor] = useState(true);
	const [namePage, setNamePage] = useState("Apadrinamiento");
	const [valorTarifa, setValorTarifa] = useState(0)

	
	function search_animal(animal_id) { 
		axios.get(`https://eledenapi.com/service/catalogapi/animals/${animal_id}`).then(res => {
            const animalsData =  res.data;
						console.log(animalsData)
						setAnimal(animalsData)
    	})
	}
	// const sendNotification = (user) =>{
		
	// 	axios.post(`http://localhost:7600/send_email/`,user).then((response)=>{
	// 		console.log(response)
	// 	}

	// 	)
	// }
	
	useEffect(() => {
		const q = new URLSearchParams(window.location.search)
		if(q.get("success") === "true") {
			paymentCheck(q.get("session_id"))
			//sendNotification(user.user)
		}

		

		const animal_q = new URLSearchParams(window.location.search)
		if(animal_q.get("id") != null) {
			search_animal(animal_q.get("id"))
		}

		async function traemeDatos() {
			await getClientDataP({ id: "1234", name: "Julio" });
		}
		traemeDatos();
	},[]);

	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			ValorPago: 0,
		},
		onSubmit: async (values) => {
			const pagoDon = JSON.stringify(values, null, 2);
			const pagoFinalD = JSON.parse(pagoDon).ValorPago
			if (namePage !== "Donador") {
				await registrarPago(idAnimal, clienteCedula, user[0].cedula, valorTarifa, "Patrocinador");
			} else {
				await registrarPago(null, clienteCedula, user[0].cedula, pagoFinalD, "Donador");
			}
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
				marginTop:{
					xs: 0,
					sm: 0,
					md: 0,
					lg: 4,
					xl: 4
				},
				marginLeft: {
					xs: 0,
					sm: 0,
					md: 0,
					lg: 20,
					xl: 20
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

						<Typography alignSelf={'center'} variant='h1' color={'#881600'}>{"Pago " + namePage}</Typography>

						<form onSubmit={formik.handleSubmit}>
							<Grid container rowSpacing={6}>
								<Grid item xs={11} md={6}>
									<Container>
										<TextField fullWidth id="ClienteId" label="Cliente ID" variant="filled" name='ClienteId' value={clienteCedula} disabled />
									</Container>
								</Grid>
								<Grid item xs={11} md={6}>
									<Container>
										<TextField fullWidth id="Apellido" label="Nombre Cliente" variant="filled" name='Apellido' value={clienteNombre} disabled />
									</Container>
								</Grid>
								<Grid item xs={4} md={2}>
									<Container>
										<Button
											variant="outlined"
											size='small'
											onClick={() => { setNamePage("Apadrinamiento"); setNoDonor(true); }}
											sx={{ border: '3px solid #881600', borderRadius: 15, ':hover': { border: '3px solid #881600' } }}

										>
											<Typography
												sx={{
													fontSize: 20
												}}
												color={'#881600'}
											>
												Ap
											</Typography>
										</Button>
									</Container>
								</Grid>
								<Grid item xs={4} md={2}>
									<Container>
										<Button
											variant="outlined"
											size='small'
											onClick={() => { setNamePage("Albergue"); setNoDonor(true); }}
											sx={{ border: '3px solid #881600', borderRadius: 15, ':hover': { border: '3px solid #881600' } }}

										>
											<Typography
												sx={{
													fontSize: 20
												}}
												color={'#881600'}
											>
												Al
											</Typography>
										</Button>
									</Container>
								</Grid>
								<Grid item xs={4} md={2}>
									<Container>
										<Button
											variant="outlined"
											size='small'
											onClick={() => { setNamePage("Donador"); setNoDonor(false) }}
											sx={{ border: '3px solid #881600', borderRadius: 15, ':hover': { border: '3px solid #881600' } }}

										>
											<Typography
												sx={{
													fontSize: 20
												}}
												color={'#881600'}
											>
												Do
											</Typography>
										</Button>
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
							</Grid>
							{noDonor ?
								<Grid container rowSpacing={2} sx={{ paddingTop: 3 }}>
									<Grid item xs={11} md={4} >
										<Container>
											<TextField fullWidth id="Telefono" label="Id Animal" variant="filled" name='Telefono' value={animal.id??" "} disabled />
										</Container>
									</Grid>
									<Grid item xs={11} md={4}>
										<Container>
											<TextField fullWidth id="Cedula" label="Nombre Animal" variant="filled" name='Cedula' value={animal.Nombre??" "} disabled />
										</Container>
									</Grid>
									<Grid item xs={11} md={4}>
										<Container>
											<TextField fullWidth id="Cedula" label="Tipo de animal" variant="filled" name='Cedula' value={animal.Tipo??" "} disabled />
										</Container>
									</Grid>
									<Grid item xs={4} md={4}>
										<Container>

											<Button
												variant="contained"
												size='small'
												fullWidth
												onClick={handleClickOpen}

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
													color={'#fff'}
												>
													Tarifas
												</Typography>
											</Button>
											<Dialog
												open={open}
												onClose={handleClose}
											>
													<img className='precios' 
													src={tarifas} 
													alt='Tarifas'
													/>

											</Dialog>
										</Container>
									</Grid>
									<Grid item xs={7} md={8}>
										<Container>
											<TextField fullWidth id="ValorTarifaPago" label="Valor a pagar" variant="filled" name='ValorTarifaPago' value={valorTarifa} disabled />
										</Container>
									</Grid>
								</Grid>
								:
								<Box sx={{ paddingTop: 3 }}>
									<Container>
										<TextField fullWidth id="ValorPago" label="Valor a pagar" variant="filled" name='ValorPago' value={formik.values.ValorPago} onChange={formik.handleChange} />
									</Container>
								</Box>
							}


							<Stack direction={'row'} spacing={2} justifyContent={'space-between'} sx={{ paddingTop: 5 }}>
								<Container>
									<Button
										variant="outlined"
										size='medium'
										fullWidth
										onClick={cancel}
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
										onClick={() => paymentService({
											"name": "Nutria",
											"unit_amount": 120000,
											"quantity": 1,
											"donation": noDonor,
											"type_animal": "Mamifero",
											"metadata": {
												"client_id": "2546",
												"client_name": "Juan Esteban",
												"animal_id": "65588",
											}
										})}
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