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
      my: { xs: 7, md: 8 },
      width: { xs: 'calc(100% - 80px)', md: 'calc(100% - 128px)' },
      px: 5,
      py: 4,
      bgcolor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '8px',
      borderStyle: 'solid',
      borderWidth: 2,
      backdropFilter: 'blur(8px)',
      boxSizing: 'border-box',
      borderColor: 'rgba(0,0,0,0.5)',
      position: 'relative',
      zIndex: 11,
    }}
    component='footer'
  >
    <Typography
      gutterBottom
      align='center'
      color='text.primary'
      variant='body2'
      mb={0}
    >
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
    <Typography sx={{ display: { xs: 'none', md: 'block' } }} variant='button'>
      *BEE* *BOB* *BOO*
    </Typography>
    <Box display='flex' sx={{ '& a': { cursor: 'pointer' } }}>
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
