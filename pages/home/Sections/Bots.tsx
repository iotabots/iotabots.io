import React from 'react'
import { Box, Button, Container, Typography } from '@iotabots/components'
import { useRouter } from 'next/router'
import Fade from 'react-reveal/Zoom'
import IotabotGrid from '../../../components/IotabotGrid'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Bots = () => {
  const router = useRouter()
  const goToBots = (): void => {
    router.push('/bots')
  }
  return (
    <Box py={8}>
      <Fade bottom>
        <Container maxWidth='md'>
          <Typography variant='h3' align='center' sx={{ pb: 6 }}>
            Profile Picture NFTs
          </Typography>
          <Typography variant='body1' align='center' sx={{ pb: 6 }}>
            Collect the IOTABOTS Profile Picture Non-fungible Tokens (PFP NFTs)
            and discover the Metaverse.
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
  )
}

export default Bots
