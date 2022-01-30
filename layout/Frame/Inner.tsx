/* eslint-disable max-len */
import { Box, SxProps } from '@mui/material'
import React from 'react'
import { WIDTH } from '.'

const baseStyles: SxProps = {
  bgcolor: '#212C44',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'rgba(0,0,0,0.8)',
  position: 'fixed',
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
        ...baseStyles,
        top: 0,
        left: 0,
        height: { xs: WIDTH.xs + 16, md: WIDTH.md + 16 },
        width: '100%',
        zIndex: 7,
      }}
    />
    <Box
      sx={{
        ...baseStyles,
        top: 0,
        right: 0,
        width: { xs: WIDTH.xs + 16, md: WIDTH.md + 16 },
        height: '100vh',
        zIndex: 7,
      }}
    />
    <Box
      sx={{
        ...baseStyles,
        bottom: 0,
        right: 0,
        height: { xs: WIDTH.xs + 16, md: WIDTH.md + 16 },
        width: '100%',
        zIndex: 7,
      }}
    />
    <Box
      sx={{
        ...baseStyles,
        bottom: 0,
        left: 0,
        width: { xs: WIDTH.xs + 16, md: WIDTH.md + 16 },
        height: '100vh',
        zIndex: 7,
      }}
    />
    <Box
      sx={{
        height: 4,
        width: 'calc(100% - 440px)',
        position: 'fixed',
        left: 220,
        top: { xs: WIDTH.xs + 6, md: WIDTH.md + 6 },
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
        bottom: { xs: WIDTH.xs + 6, md: WIDTH.md + 6 },
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
        left: { xs: WIDTH.xs + 6, md: WIDTH.md + 6 },
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
        right: { xs: WIDTH.xs + 6, md: WIDTH.md + 6 },
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
  </>
)

export default Inner
