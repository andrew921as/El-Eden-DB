import React from 'react'
import { Link,Container, Stack } from '@mui/material'
import iconoOso from '../Images/IconoOso.png'
import { Link as RouterLink } from 'react-router-dom'

import "../styles/Menu.css"



function MenuArriba() {
  return (
    <div className='MenuC'>
      <Container sx={{height:65, backgroundColor:"#FDD68D", borderRadius:2, paddingTop:1}}>
        <Stack direction="row" spacing={6} alignItems='center' justifyContent='space-between'>
        <img src={iconoOso}/>
          <Stack direction="row" spacing={6} alignItems='center' justifyContent='flex-end'>
            <Link underline='none' variant='subtitle1' color='#f54021' component={RouterLink} to='/'>
              Inicio
            </Link>
            <Link underline='none' variant='subtitle1' color='#f54021' component={RouterLink} to='/Registro-Usuario'>
              Registrar Usuario
            </Link>
            <Link underline='none' variant='subtitle1' color='#f54021' component={RouterLink} to='/Registro-Animal'>
              Registrar Animal
            </Link>
            <Link underline='none' variant='subtitle1' color='#f54021' component={RouterLink} to='/Buscar-Animal'>
              Buscar Animal
            </Link>
          </Stack>
        </Stack>
      </Container>
    </div>
  )
}

export default MenuArriba