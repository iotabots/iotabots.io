/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Box } from '@mui/material'
import edgeTr from '../../public/assets/frame/edge-tr.svg'
import edgeBr from '../../public/assets/frame/edge-br.svg'
import edgeBl from '../../public/assets/frame/edge-bl.svg'
import edgeTl from '../../public/assets/frame/edge-tl.svg'
import { EDGE_SIZE, WIDTH } from '.'


const Edges: React.FC = () => {
  const distance = {
    xs: WIDTH.xs - 8,
    md: WIDTH.md - 8,
  }
  return (
    <Box
      sx={{
        'img': {
          position: 'fixed',
          zIndex: 9,
          width: { ...EDGE_SIZE },

          '&.top-right': {
            top: { ...distance },
            right: { ...distance },
          },
          '&.bottom-right': {
            bottom: { ...distance },
            right: { ...distance }
          },
          '&.bottom-left': {
            bottom: { ...distance },
            left: { ...distance },
          },
          '&.top-left': {
            top: { ...distance },
            left: { ...distance },
          },
        }
      }}
    >
      <img className='top-right' alt='3D Logo Animation' src={edgeTr.src} />
      <img className='bottom-right' alt='3D Logo Animation' src={edgeBr.src} />
      <img className='bottom-left' alt='3D Logo Animation' src={edgeBl.src} />
      <img className='top-left' alt='3D Logo Animation' src={edgeTl.src} />
    </Box>
  )
}
export default Edges
