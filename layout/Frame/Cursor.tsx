import { Box } from '@mui/material'
import React from 'react'

interface CursorProps {
  position: { x: number, y: number }
}

const Cursor: React.FC<CursorProps> = (props) => {
  const { position } = props
  const fixedContainer = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  } as const

  const cursorCoords = {
    left: position.x,
    top: position.y,
  } as const

  return (

    <Box
      sx={{
        ...fixedContainer,
        zIndex: 10000,
        pointerEvents: 'none',
      }}
    >
      <Box className='cursor'
        sx={{
          ...cursorCoords,
          position: 'absolute',
          width: 24,
          height: 24,
          boxSizing: 'border-box',
          bgcolor: 'rgba(0,0,0,.26)',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: 'rgba(255,255,255,0.5)',
          borderRadius: '50%',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
          zIndex: 10000,
          padding: '24px',
        }}>
        <Box sx={{
          height: 2,
          width: 2,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.5)'
        }} />
      </Box>
    </Box>
  )
}

export default Cursor
