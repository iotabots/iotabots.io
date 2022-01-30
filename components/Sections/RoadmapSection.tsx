import React from 'react'
import {
  Box,
  Container,
  ContentBox,
  Timeline,
} from '@iotabots/components'
import Fade from 'react-reveal/Zoom'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const RoadmapSection = () => (
  <Box py={8}>
    <Fade bottom>
      <Container maxWidth='md'>
        <ContentBox headline='Roadmap' text='' image=''>
          <Timeline checked title='Website relaunch'>
            Better Teck Stack, UI Improvments and extern component library.
          </Timeline>
          <Timeline checked title='Twitter Giveaways'>
            Everyday Giveaways on Twitter.
          </Timeline>
          <Timeline checked title='Drop #3'>
            Free drop of 1001 Spacebots Game NFT.
          </Timeline>
          <Timeline checked title='Drop #2'>
            Free drop of 500 unique IOTABOTS NFTs from Number 501-1000.
          </Timeline>
          <Timeline checked title='Drop #1'>
            Free drop of 500 unique IOTABOTS NFTs from Number 1-500.
          </Timeline>
        </ContentBox>
      </Container>
    </Fade>
  </Box>
)

export default RoadmapSection
