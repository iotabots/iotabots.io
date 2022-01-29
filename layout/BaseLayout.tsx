import React from 'react'
import { Box } from '@iotabots/components'
import { Typography } from '@mui/material'
import Pattern from './Pattern'
import Frame from './Frame'

const BaseLayout: React.FC = (props) => {
  const { children } = props

  return (
    <Box sx={{
      flexGrow: 1,
      flexShrink: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Pattern />
      <Frame />
      <Typography>Peter</Typography>
      <Box sx={{
        position: 'relative',
        zIndex: 2,
      }}>
        {children}
      </Box>
    </Box>
  )
}

export default BaseLayout
