import React from 'react'
import { Box, Container, ContentBox } from '@iotabots/components'
import Image from 'next/image'
import Fade from 'react-reveal/Zoom'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const WelcomeSection = () => (
  <Box py={8} bgcolor='background.default'>
    <span id='welcome' className='anchor' style={{ marginTop: '-100px' }} />
    <Container>
      <Box sx={{ mb: 6 }}>
        <Fade bottom>
          <ContentBox
            image={
              <Image
                src='http://assets.iotabots.io/9.png'
                alt='IOTABOT'
                layout='intrinsic'
                width={200}
                height={200}
              />
            }
            // eslint-disable-next-line max-len
            text='An IOTABOT is a NFT in the form of a profile picture (PFP) that gives you access to the IOTABOTVERSE. At this time they are NFTs (ERC721 Tokens) on the public IOTA Smart Contract EVM Testnet.'
            headline='WHAT IS AN IOTABOT?!'
          >
            {}
          </ContentBox>
        </Fade>
      </Box>
      <Box>
        <Fade bottom>
          <ContentBox
            image={
              <Image
                src='http://assets.iotabots.io/1000.png'
                alt='IOTABOT'
                layout='intrinsic'
                width={200}
                height={200}
              />
            }
            // eslint-disable-next-line max-len
            text='The IOTABOTVERSE consists of many NFT projects. Discover the metaverse and play, trade and earn with IOTABOTS and others.'
            headline='WHAT IS the IOTABOTVERSE?!'
          >
            {}
          </ContentBox>
        </Fade>
      </Box>
    </Container>
  </Box>
)

export default WelcomeSection
