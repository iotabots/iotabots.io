import React from 'react'
import { Box, Button, Typography } from '@iotabots/components'
import Fade from 'react-reveal/Zoom'
import BackgroundVideo from '../BackgroundVideo'

const HeroSection: React.FC = () => {
  const scrollToBottom = (): void => {
    const bottomEle = document.getElementById('welcome')
    if (bottomEle) bottomEle.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Box>
      <BackgroundVideo blur={0} videoSource='assets/TEASER.mp4'>
        <Box className='content'>
          <Fade bottom>
            <Box
              className='sub-content'
              sx={{
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                variant='h2'
                align='center'
                color='#ffffff'
                gutterBottom
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                IOTABOTS
              </Typography>

              <Typography variant='h5' align='center' color='#ffffff' paragraph>
                First PFP NFTs on IOTA
              </Typography>

              <Box sx={{ textAlign: 'center' }}>
                <Button
                  color='secondary'
                  variant='contained'
                  onClick={scrollToBottom}
                  size='large'
                  sx={{
                    color: 'primary.contrastText',
                    mt: { sm: 2 },
                    boxShadow: 2,
                  }}
                >
                  Let&apos;s go!
                </Button>
              </Box>
            </Box>
          </Fade>
        </Box>
      </BackgroundVideo>
    </Box>
  )
}

export default HeroSection
