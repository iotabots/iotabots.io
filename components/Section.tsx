import { Box } from '@mui/material'
import React from 'react'

const Section: React.FC = ({ children }) => (
  <Box sx={{
    mt: '160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh'
  }}>
    {children}
  </Box>
)

export default Section
