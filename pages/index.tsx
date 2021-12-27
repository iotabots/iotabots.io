import React from 'react'
import { Box, Container, ContentBox, Typography } from '@iotabots/components'
import Fade from 'react-reveal/Zoom'
import BaseLayout from '../layout/BaseLayout'
import Hero from '../components/Hero'
import IotabotGrid from '../components/IotabotGrid'

export const Home = (): JSX.Element => (
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
              Available Bots
            </Typography>
            <IotabotGrid />
          </Container>
        </Fade>
      </Box>
    </Box>
  </BaseLayout>
)

export default Home
