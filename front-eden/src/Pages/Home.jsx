import React from 'react';
import { Stack, Typography } from '@mui/material';

import MenuArriba from '../Components/MenuArriba';

function Home() {
  return (
    <div>
      <MenuArriba/>
      
      <br/>
      <br/>
        <Stack 
        spacing={8} 
        direction={'column'} 
        alignItems={'flex-end'}
        >
        <Typography variant='h5'>
        Bunas mi gente a programar se dijo AHHHHH
        </Typography>
        <Typography variant='h5'>
        Bunas mi gente a programar se dijo AHHHHH
        </Typography>
        
        </Stack>

      <Typography variant='h5'>
        Bunas mi gente a programar se dijo AHHHHH
      </Typography>

    </div>
  )
}

export default Home