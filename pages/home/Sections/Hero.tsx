/* eslint-disable max-len */
import React from 'react'
import { Button } from '@iotabots/components'
import { Box, Container, Grid, Typography } from '@mui/material'
import iotabots from '../../../public/assets/iotabots.png'
import Section from '../../../components/Section'

const Hero: React.FC = () => {
  const scrollToBottom = (): void => {
    const bottomEle = document.getElementById('welcome')
    if (bottomEle) bottomEle.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Section sx={{ justifyContent: 'center' }}>
      <Container>
        <Grid
          container
          sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}
          spacing={6}
        >
          <Grid
            item
            xs={12}
            md={6}
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
              color='secondary'
              sx={{
                '&.MuiButton-containedSecondary': {
                  bgcolor: 'secondary.main',
                  borderColor: 'secondary.light'
                }
              }}
              onClick={() => scrollToBottom}
            >
              Explore Metaverse
            </Button>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{ width: '100%' }}
              component='img'
              src={iotabots.src}
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}

export default Hero
