import React from 'react'
import { Box, Link, Typography } from '@iotabots/components'

const Copyright: React.FC = () => (
  <Typography variant='body2' color='text.secondary' align='center'>
    © iotabots.io
  </Typography>
)

export const Footer: React.FC = () => (
  <Box
    sx={{
      mx: 'auto',
      my: 8,
      width: 'calc(100% - 124px)',
      px: 5,
      py: 4,
      bgcolor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '8px',
      position: 'relative',
      zIndex: 11,
    }}
    component='footer'
  >
    <Typography gutterBottom align='center' color='text.primary'>
      <Link
        href='https://twitter.com/iotabots'
        target='_blank'
        rel='noreferrer'
        className='link decent'
        color='inherit'
      >
        <Copyright />
      </Link>
    </Typography>
    <Typography variant='button'>
      *BEE* *BOB* *BOO*
    </Typography>
    <Box display='flex' >
      <Link
        href='https://twitter.com/iotabots'
        target='_blank'
        rel='noreferrer'
        className='link decent'
        color='inherit'
      >
        <Typography ml={4} variant='body2' color='text.secondary'>
          Discord
        </Typography>
      </Link>
      <Link
        href='https://twitter.com/iotabots'
        target='_blank'
        rel='noreferrer'
        className='link decent'
        color='inherit'
      >
        <Typography ml={4} variant='body2' color='text.secondary'>
          Twitter
        </Typography>
      </Link>
    </Box>
  </Box>
)
