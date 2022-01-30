/* eslint-disable max-len */
import { Box, SxProps } from '@mui/material'
import React from 'react'

const baseStyles: SxProps = {
  bgcolor: 'rgba(0,0,0,0.8)',
  position: 'fixed',
  zIndex: 8,
}

const Outer: React.FC = () => (
  <Box className='outer'>
    <Box
      sx={{
        ...baseStyles,
        top: 0,
        left: 0,
        height: 16,
        width: '100%',
      }}
    />
    <Box
      sx={{
        ...baseStyles,
        top: 0,
        right: 0,
        width: 16,
        height: '100vh',
      }}
    />
    <Box
      sx={{
        ...baseStyles,
        bottom: 0,
        right: 0,
        height: 16,
        width: '100%',
      }}
    />
    <Box
      sx={{
        ...baseStyles,
        bottom: 0,
        left: 0,
        width: 16,
        height: '100vh',
      }}
    />
  </Box>
)

export default Outer
