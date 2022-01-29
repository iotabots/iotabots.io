/* eslint-disable max-len */
import { Box, SxProps } from '@mui/material'
import React from 'react'

const baseStyles: SxProps = {
  borderStyle: 'solid',
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100%',
}

const circleStyles: SxProps = {
  height: 4,
  width: 4,
  bgcolor: 'rgba(46, 255, 191, 1)',
  boxShadow: '0px 0px 5.41704px #2EFFBF',
  borderRadius: 4,
}

const pipe: SxProps = {
  height: '1px',
  maxHeight: '1px',
  width: 'calc(100% - 8px)',
  bgcolor: 'rgba(46, 255, 191, 1)',
  boxShadow: '0px 0px 4px  #2EFFBF',
}

const pipeVertical: SxProps = {
  width: '1px',
  maxWidth: '1px',
  height: 'calc(100vh - 8px)',
  bgcolor: 'rgba(46, 255, 191, 1)',
  boxShadow: '0px 0px 4px  #2EFFBF',
}

const Inner: React.FC = () => (
  <>
    <Box
      sx={{
        borderColor: '#212C44',
        borderWidth: 32,
        zIndex: 7,
        ...baseStyles
      }}
    />
    <Box
      sx={{
        height: 4,
        width: 'calc(100% - 440px)',
        position: 'fixed',
        left: 220,
        top: 22,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={circleStyles} className='circle' />
      <Box sx={pipe} />
      <Box sx={circleStyles} className='circle' />
    </Box>
    <Box
      sx={{
        height: 4,
        width: 'calc(100% - 440px)',
        position: 'fixed',
        left: 220,
        bottom: 22,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={circleStyles} className='circle' />
      <Box sx={pipe} />
      <Box sx={circleStyles} className='circle' />
    </Box>
    <Box
      sx={{
        width: 4,
        height: 'calc(100vh - 440px)',
        position: 'fixed',
        left: 22,
        bottom: 220,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={circleStyles} className='circle' />
      <Box sx={pipeVertical} />
      <Box sx={circleStyles} className='circle' />
    </Box>
    <Box
      sx={{
        width: 4,
        height: 'calc(100vh - 440px)',
        position: 'fixed',
        right: 22,
        bottom: 220,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={circleStyles} className='circle' />
      <Box sx={pipeVertical} />
      <Box sx={circleStyles} className='circle' />
    </Box>
    <Box
      sx={{
        borderColor: 'rgba(0,0,0,0.8)',
        borderWidth: 34,
        zIndex: 6,
        ...baseStyles
      }}
    />
  </>
)

export default Inner
