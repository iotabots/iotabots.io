import React from 'react'
import { Box } from '@mui/material'
import Outer from './Outer'
import Inner from './Inner'
import Edges from './Edges'
import Pattern from './Pattern'

export const WIDTH = {
  xs: 8,
  md: 16,
}

export const EDGE_SIZE = {
  xs: 140,
  md: 160
}

const Frame: React.FC = () => (
  <Box className='frame'>
    <Outer />
    <Inner />
    <Edges />
    <Pattern />
  </Box>
)

export default Frame
