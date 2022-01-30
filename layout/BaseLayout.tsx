/* eslint-disable react/require-default-props */
import React from 'react'
import { Box } from '@iotabots/components'
import Frame from './Frame'
import { Footer } from '../components/Footer'

interface BaseLayout {
  frame?: boolean
}

const BaseLayout: React.FC<BaseLayout> = (props) => {
  const { frame = true, children } = props

  return (
    <Box className='page'>
      {frame && <Frame />}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
      }}>
        {children}
        <Footer />
      </Box>
    </Box>
  )
}

export default BaseLayout
