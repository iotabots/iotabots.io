/* eslint-disable max-len */
import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Button } from '@iotabots/components'
import BaseLayout from '../layout/BaseLayout'
import iotabots from '../public/assets/iotabots.png'

const Frame: React.FC = () => <BaseLayout>
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Container>
      <Grid container spacing={6}>
        <Grid
          item
          xs={6}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='flex-start'
        >
          <Typography variant='h1' fontWeight='bold' gutterBottom>
            NFT GAMES on IOTA
          </Typography>
          <Typography mb={6} fontSize={20} fontFamily='Inter' color='text.secondary'>
            IOTABOTS was the first project which launched Profile Picture Non-Fungible Tokens (PFP NFTs) on the public IOTA Smart Contracts EVM Testnet.
          </Typography>
          <Button
            size='large'
            sx={{ fontWeight: 'bold', fontFamily: 'Inter' }}
          >
            Explore Metaverse
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img alt='3D Logo Animation' src={iotabots.src} />
        </Grid>
      </Grid>
    </Container>
  </Box>
</BaseLayout>

export default Frame
