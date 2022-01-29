import React from 'react'
import { Box } from '@mui/material'
import Outer from './Outer'
import Inner from './Inner'
import Edges from './Edges'

const Frame: React.FC = () => (
  <Box>
    <Outer />
    <Inner />
    <Edges />
  </Box>
)

export default Frame
