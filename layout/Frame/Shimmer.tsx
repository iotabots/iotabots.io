import { Box } from '@mui/material'
import React from 'react'

interface ShimmerProps {
  position: {
    x: number
    y: number
  }
}

const Shimmer: React.FC<ShimmerProps> = (props) => {
  const { position } = props
  const cursorCoords = {
    left: position.x,
    top: position.y,
  } as const
  return (
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
  )
}
export default Shimmer
