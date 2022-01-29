/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Box } from '@mui/material'
import edgeTr from '../../public/assets/edge-tr.svg'
import edgeBr from '../../public/assets/edge-br.svg'
import edgeBl from '../../public/assets/edge-bl.svg'
import edgeTl from '../../public/assets/edge-tl.svg'


const Edges: React.FC = () => (
  <Box
    sx={{
      'img': {
        position: 'fixed',
        zIndex: 9,
        width: 180,

        '&.top-right': {
          top: 10,
          right: 10,
        },
        '&.bottom-right': {
          bottom: 10,
          right: 10,
        },
        '&.bottom-left': {
          bottom: 10,
          left: 10,
        },
        '&.top-left': {
          top: 10,
          left: 10,
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

export default Edges
