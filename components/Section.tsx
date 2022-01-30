import { Box, BoxProps } from '@mui/material'
import React from 'react'

const Section: React.FC<BoxProps> = (props) => {
  const { children, sx } = props
  return (
    <Box {...props}
      sx={{
        py: '160px',
        px: { xs: 8, lg: 0 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        ...sx
      }}>
      {children}
    </Box >
  )
}

export default Section
