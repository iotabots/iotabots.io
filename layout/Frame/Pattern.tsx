/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react'
import { Box } from '@mui/system'
import pattern from '../../public/assets/pattern.png'
import Cursor from './Cursor'

const Pattern: React.FC = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  /* document.body.style.cursor = 'none' */
  // const pattern = require('../public/assets/pattern.png')

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const setFromEvent = (e: any) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', setFromEvent)
    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

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
    <>
      <Box
        sx={{ ...fixedContainer }}
      >
        <Box sx={{
          position: 'relative',
          zIndex: 1,
          height: '100vh',
          width: '100%',
          backgroundImage: `url(${pattern.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} />
        <Box className='shimmer'
          sx={{
            ...cursorCoords,
            width: 690,
            height: 690,
            // eslint-disable-next-line max-len
            background: 'radial-gradient(39.12% 39.12% at 50% 50%, #2EFFBF 0%, rgba(46, 255, 191, 0) 100%)',
            opacity: 0.5,
            borderRadius: '50%',
            position: 'absolute',
            transform: 'translate(-50%,-50%)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />
      </Box>
      <Cursor position={position} /></>
  )
}

export default Pattern
