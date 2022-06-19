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
              <img src={iconoOso} />
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
          <Container className='MenuC'>
            <Container sx={{ height: 65, backgroundColor: "#FDD68D", borderRadius: 2, paddingTop: 1 }}>
              <Stack direction="row" alignItems='center' justifyContent='space-between'>
                <img src={iconoOso} />
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
          </Container>
        )
      }

    </div>
  )
}

export default MenuArriba
