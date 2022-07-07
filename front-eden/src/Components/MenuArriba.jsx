import React, { useState } from 'react'
import {
  Link,
  Container,
  Stack,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItemButton,
  Button,
  Typography,
  Box,
} from '@mui/material'
import iconoOso from '../Images/IconoOso.png'
import { Link as RouterLink } from 'react-router-dom'

import "../styles/Menu.css"


function MenuArriba() {
  const [isOpen, setIsOpen] = useState(false)

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  console.log(match);

  return (
    <div>
      {
        match ? (
          <Container
            className='MenuCel'
            sx={{ backgroundColor: "#FDD68D" }}
          >
            <Button onClick={()=>setIsOpen(true)}>
              <Stack direction='row' alignItems='center' spacing={1}>
                <img src={iconoOso} />
                <Typography color='#f54021'> menu</Typography>
              </Stack>
            </Button>
            <React.Fragment>
              <Drawer
                anchor='left'
                open={isOpen}
                onClose={()=>setIsOpen(false)}
              >
                <List>
                  <ListItemButton>
                    <Link underline='none' variant='subtitle1' color='#f54021' component={RouterLink} to='/'>
                      Inicio
                    </Link>
                  </ListItemButton>
                  <ListItemButton>
                    <Link underline='none' variant='subtitle1' color='#f54021' component={RouterLink} to='/Registro-Usuario'>
                      Registrar Usuario
                    </Link>
                  </ListItemButton>
                  <ListItemButton>
                    <Link underline='none' variant='subtitle1' color='#f54021' component={RouterLink} to='/Registro-Animal'>
                      Registrar Animal
                    </Link>
                  </ListItemButton>
                  <ListItemButton>
                    <Link underline='none' variant='subtitle1' color='#f54021' component={RouterLink} to='/Buscar-Animal'>
                      Buscar Animal
                    </Link>
                  </ListItemButton>
                </List>

              </Drawer>
            </React.Fragment>
          </Container>
        ) : (
              <Stack
              className='MenuC'
              sx={{ height: 150, backgroundColor: "#FDD68D", paddingTop: 2 }} 
              direction="row" 
              alignItems='flex-start' 
              justifyContent='space-between'
              >
                <Stack direction="row" spacing={2} alignItems='center'>
                  <img src={iconoOso} />
                  <Typography variant='h1' sx={{fontWeight:'bold'}} color='#ff5c0c'>EL EDEN</Typography>
                </Stack>
                <Box sx={{ marginRight:3 }}>
                <Typography>Andrew921as</Typography>
                </Box>
              </Stack>
        )
      }

    </div>
  )
}

export default MenuArriba

/**Codigo para hacer un menu
 * 
 * <Link underline='none' variant='subtitle1' color='#f54021' component={RouterLink} to='/'>
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
 */