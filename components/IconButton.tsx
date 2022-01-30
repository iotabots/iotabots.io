import React from 'react'
import { Box, Button, IconButtonProps } from '@mui/material'

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { children, sx, onClick } = props
  return (
    <Button
      size='small'
      variant='contained'
      color='primary'
      onClick={onClick}
      sx={{
        ...sx,
        '&.MuiButton-containedPrimary': {
          borderRadius: '50px',
          maxWidth: 'auto',
          minWidth: 'auto',
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'background.paper',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'rgba(0,0,0,0.5)',
          '&:hover': {
            bgcolor: 'primary.main',
            cursor: 'pointer',
          }
        },

      }}
    >
      <Box sx={{
        height: 20,
        width: 20,
        '& svg': {
          color: 'common.white',
          height: 'inherit',
          width: 'inherit',
        }
      }}>
        {children}
      </Box>
    </Button>
  )
}

export default IconButton
