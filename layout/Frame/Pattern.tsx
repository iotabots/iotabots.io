/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react'
import { Box } from '@mui/system'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import pattern from '../../public/assets/frame/pattern.png'
import Cursor from './Cursor'
import Shimmer from './Shimmer'

const Pattern: React.FC = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  /* document.body.style.cursor = 'none' */
  // const pattern = require('../public/assets/pattern.png')

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

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
        {matches && <Shimmer position={position} />}
      </Box>
      {matches && <Cursor position={position} />}
    </>
  )
}

export default Pattern
