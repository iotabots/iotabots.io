/* eslint-disable @next/next/link-passhref */
import React from 'react'
import { Box } from '@mui/material'
import Link from 'next/link'

import logo from '../public/assets/iotabots.svg'

const Logo: React.FC = () => (
  <Link href='/'>
    <Box
      component='img'
      src={logo.src}
      sx={{
        height: 40, '&:hover': { cursor: 'pointer' }
      }}
    />
  </Link>
)

export default Logo
