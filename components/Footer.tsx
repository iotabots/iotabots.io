import React from 'react'
import { Box, Link, Typography } from '@iotabots/components'

const Copyright: React.FC = () => (
  <Typography variant='body2' color='text.secondary' align='center'>
    © iotabots.io
  </Typography>
)

export const Footer: React.FC = () => (
  <Box sx={{ px: 2, py: 6 }} component='footer'>
    <Typography
      variant='body1'
      color='text.secondary'
      align='center'
      gutterBottom
    >
      *BEE* *BOB* *BOO*
    </Typography>
    <Typography gutterBottom align='center' color='text.secondary'>
      Dont Miss the Next Drop - Follow us on Twitter
    </Typography>
    <br />
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
  </Box>
)
