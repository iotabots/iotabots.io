/* eslint-disable max-len */
import React from 'react'
import { Box, Button, Typography } from '@iotabots/components'
import { Container, Grid } from '@mui/material'
import iotabots from '../../public/assets/iotabots.png'

const HeroSection: React.FC = () => {
  const scrollToBottom = (): void => {
    const bottomEle = document.getElementById('welcome')
    if (bottomEle) bottomEle.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
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
            <Typography variant='h1' gutterBottom>
              NFT GAMES on IOTA
            </Typography>
            <Typography mb={6} fontSize={20} color='text.secondary'>
              IOTABOTS was the first project which launched Profile Picture Non-Fungible Tokens (PFP NFTs) on the public IOTA Smart Contracts EVM Testnet.
            </Typography>
            <Button
              size='large'
              sx={{ fontWeight: 'bold' }}
              onClick={() => scrollToBottom}
            >
              Explore Metaverse
            </Button>
          </Grid>
          <Grid item xs={6}>
            <img alt='3D Logo Animation' src={iotabots.src} />
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}

export default HeroSection
