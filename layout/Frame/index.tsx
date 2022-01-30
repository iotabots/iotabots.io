import React from 'react'
import { Box } from '@mui/material'
import Outer from './Outer'
import Inner from './Inner'
import Edges from './Edges'
import Pattern from './Pattern'

const Frame: React.FC = () => (
  <Box className='frame'>
    <Outer />
    <Inner />
    <Edges />
    <Pattern />
  </Box>
)

export default Frame
