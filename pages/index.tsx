import React from 'react'
import { Box, Container, ContentBox, Typography } from '@iotabots/components'
import BaseLayout from '../layout/BaseLayout'
import Hero from '../components/Hero'
import IotabotGrid from '../components/IotabotGrid'

export const Home = (): JSX.Element => (
  <BaseLayout>
    <Box className='flex-body'>
      <Hero />

      <Box id='what' py={8} bgcolor='background.default'>
        <Container  >
          <ContentBox
            image="http://assets.iotabots.io/9.png"
            text="An IOTABOT is a NFT in the form of a profile picture (PFP) that gives you access to the IOTABOTVERSE. At this time they are NFTs (ERC721 Tokens) on the public IOTA Smart Contract EVM Testnet."
            title="WHAT IS AN IOTABOT?!"
          />
        </Container>
      </Box>

      <Box py={8} bgcolor='background.light'>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            sx={{ pb: 6 }}
          >
            Available Bots
          </Typography>
          <IotabotGrid />
        </Container>
      </Box>
    </Box>
  </BaseLayout>
)

export default Home