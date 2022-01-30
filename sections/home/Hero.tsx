/* eslint-disable max-len */
import React from 'react'
import { Button } from '@iotabots/components'
import { Box, Container, Grid, Typography } from '@mui/material'
import iotabots from '../../public/assets/iotabots.png'
import Section from '../../components/Section'

const data = {
  title: 'NFT GAMES on IOTA',
  subtitle: 'IOTABOTS was the first project which launched Profile Picture Non-Fungible Tokens (PFP NFTs) on the public IOTA Smart Contracts EVM Testnet.',
  buttonText: 'Explore Metaverse',
  image: iotabots.src
}

const Hero: React.FC = () => {
  const scrollToBottom = (): void => {
    const bottomEle = document.getElementById('welcome')
    if (bottomEle) bottomEle.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section sx={{ justifyContent: 'center' }}>
      <Container>
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            md={6}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='flex-start'
          >
            <Typography variant='h1' mb={2} fontSize='92px' lineHeight='100%'>
              {data.title}
            </Typography>
            <Typography
              variant='subtitle1'
              mb={6}
              color='rgba(255,255,255,0.66)'
            >
              {data.subtitle}
            </Typography>
            <Button
              size='large'
              color='secondary'
              onClick={() => scrollToBottom}
            >
              {data.buttonText}
            </Button>
          </Grid>
          <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{ width: '100%' }}
              component='img'
              src={data.image}
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}

export default Hero
