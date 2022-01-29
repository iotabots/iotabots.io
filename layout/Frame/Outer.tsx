/* eslint-disable max-len */
import { Box } from '@mui/material'
import React from 'react'

const Outer: React.FC = () => (
  <Box
    sx={{
      height: '100vh',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 100,
      boxSizing: 'border-box',
      borderWidth: 16,
      borderColor: '#0A101E',
      borderStyle: 'solid',
    }}
  >
    {/* <Box
      sx={{
        position: 'fixed',
        width: 16,
        height: '60vh',
        top: '20vh',
        left: 0,
        background: 'radial-gradient(2487.92% 50% at 50% 50%, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0) 100%);',
      }}
    />
    <Box
      sx={{
        position: 'fixed',
        height: 16,
        width: '40vw',
        top: 0,
        right: '15vw',
        background: 'radial-gradient(52.34% 5677102.76% at 50% 50.08%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 95%)'
      }}
    /> */}
  </Box>
)

export default Outer
