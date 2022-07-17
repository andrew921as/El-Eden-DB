import React from 'react'
import { Typography } from '@mui/material'

import '../styles/Footer.css'

function Footer() {
  return (
    <div className='FooterContainer'>
      <footerStyle>
        <Typography 
        align='center'
        variant='subtitle2' 
        sx={{paddingTop:{
          xs:3,
          sm:3,
          md:3,
          lg:5,
          xl:5
        }}}
        >
          Sistema desarrollado por los mejores desarrolladores del mundo
        </Typography>
      </footerStyle>
    </div>
  )
}

export default Footer