import React from 'react'
import {
  Box,
  Button,
  Container,
  ContentBox,
  Typography,
} from '@iotabots/components'
import Fade from 'react-reveal/Zoom'
import { useRouter } from 'next/router'
import BaseLayout from '../layout/BaseLayout'
import Hero from '../components/Hero'
import IotabotGrid from '../components/IotabotGrid'

export const Home = (): JSX.Element => {
  const router = useRouter()

  const goToBots = (): void => {
    router.push('/bots')
  }
  return (
    <BaseLayout>
      <Box>
        <Hero />

        <Box py={8} bgcolor='background.default'>
          <span id='what' className='anchor' style={{ marginTop: '-100px' }} />
          <Container>
            <Fade bottom>
              <ContentBox
                image='http://assets.iotabots.io/9.png'
                // eslint-disable-next-line max-len
                text='An IOTABOT is a NFT in the form of a profile picture (PFP) that gives you access to the IOTABOTVERSE. At this time they are NFTs (ERC721 Tokens) on the public IOTA Smart Contract EVM Testnet.'
                headline='WHAT IS AN IOTABOT?!'
              />
            </Fade>
            <Fade bottom>
              <ContentBox
                image='http://assets.iotabots.io/1000.png'
                // eslint-disable-next-line max-len
                text='The IOTABOTVERSE consists of many NFT projects. Discover the metaverse and play, trade and earn with IOTABOTS and others.'
                headline='WHAT IS the IOTABOTVERSE?!'
              />
            </Fade>
          </Container>
        </Box>

        <Box py={8} bgcolor='background.light'>
          <Fade bottom>
            <Container maxWidth='md'>
              <Typography variant='h3' align='center' sx={{ pb: 6 }}>
                Profile Picture NFTs
              </Typography>
              <Typography variant='body1' align='center' sx={{ pb: 6 }}>
                Collect the IOTABOTS Profile Picture Non-fungible Tokens (PFP
                NFTs) and discover the Metaverse.
              </Typography>
              <IotabotGrid />
            </Container>
            <Box className='content'>
              <Box
                className='sub-content'
                sx={{
                  px: 2,
                  mt: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant='body1'
                  align='center'
                  color='#ffffff'
                  paragraph
                >
                  There are 10.000 unqiue IOTABOTS!
                </Typography>
                <Button
                  variant='contained'
                  onClick={goToBots}
                  size='large'
                  sx={{
                    color: 'primary.contrastText',
                    mt: { sm: 2 },
                    boxShadow: 2,
                  }}
                >
                  Discover All IOTABOTS
                </Button>
              </Box>
            </Box>
          </Fade>
        </Box>
      </Box>
    </BaseLayout>
  )
}

export default Home
