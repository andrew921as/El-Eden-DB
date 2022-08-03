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
  Menu,
  MenuItem,
  ThemeProvider,
  styled

} from '@mui/material'
import IconoSinTitulo from '../Images/IconoSinTitulo.png'
import { Link as RouterLink } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import "../styles/Menu.css"
import themeMenuArriba from '../styles/Theme';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: '#EAE0D5',
  borderRadius: 0,
  height: '30px',
  color: '#ff5c0c',
  fontSize: 20,


  '&: hover': {
    backgroundColor: '#CEC2B5'
  },

}));


function MenuArriba() {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      {
        match ? (
          <Container
            className='MenuCel'
            sx={{ backgroundColor: "#EAE0D5" }}
          >
            <Button onClick={() => setIsOpen(true)}>
              <Stack
                direction='row'
                justifyContent="center"
                alignItems='center'
                spacing={1}
              >
                <img src={IconoSinTitulo} />
                <Typography color='#f54021'> menu</Typography>
              </Stack>
            </Button>
            <React.Fragment>
              <Drawer
                anchor='left'
                open={isOpen}
                onClose={() => setIsOpen(false)}
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
            sx={{ height: 110, backgroundColor: "#EAE0D5", paddingTop: 2 }}
            direction="row"
            alignItems='flex-start'
            justifyContent='space-between'
          >
            <Stack direction="row" spacing={2} alignItems='center'>
              <img src={IconoSinTitulo} />
              <Typography variant='h2' sx={{ fontWeight: 'bold' }} color='#ff5c0c'>EL EDEN</Typography>
            </Stack>
            <ThemeProvider theme={themeMenuArriba}>
              <Box sx={{ justifyContent: 'center', margin: 2 }}>

                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  size='large'
                  sx={{ color: '#FE6A16', fontSize: '20px' }}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Andrew921as
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >

                  <StyledMenuItem onClick={handleClose}>
                    <LogoutIcon />
                    Log Out
                  </StyledMenuItem>
                </Menu>
              </Box>
            </ThemeProvider>
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