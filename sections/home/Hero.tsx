/* eslint-disable max-len */
import React from 'react'
import { Box } from '@mui/material'
import {
  Button,
  Container,
  Grid,
  Section,
  Typography,
} from '@iotabots/components'
import Lottie from 'react-lottie-player'
import iotabots from '../../public/assets/logo_anim.gif'

const data = {
  title: 'Enter the Multiverse',
  subtitle:
    '*BEE* *BOB* *BOO* First NFT project on IOTA. Discover the Metaverse | NFTs | DEFI | DAO | GAMES | P2E | 100% OPENSOURCE',
  buttonText: 'Explore Metaverse',
  image: iotabots.src,
}

const Hero: React.FC = () => {
  const [animationData, setAnimationData] = React.useState(undefined)

  React.useEffect(() => {
    import('../../public/assets/lottie.json').then(setAnimationData)
  }, [])
  const scrollToBottom = (): void => {
    const bottomEle = document.getElementById('metaverse')
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
            <Typography
              variant='h1'
              mb={2}
              sx={{
                fontSize: { xs: '62px', md: '92px' },
              }}
              lineHeight='100%'
            >
              {data.title}
            </Typography>
            <Typography
              variant='subtitle1'
              mb={6}
              color='rgba(255,255,255,0.66)'
            >
              {data.subtitle}
            </Typography>
            <Button size='large' color='secondary' onClick={scrollToBottom}>
              {data.buttonText}
            </Button>
          </Grid>
          <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ width: '100%' }} component='img' src={data.image} />
          </Grid>
        </Grid>
        <Grid
          md={12}
          sx={{
            display: { xs: 'none', md: 'block' },
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Lottie
            loop
            play
            animationData={animationData}
            style={{ width: '100%', height: '100px', marginTop: '100px' }}
          />
        </Grid>
      </Container>
    </Section>
  )
}

export default Hero
