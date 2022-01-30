import React from 'react'
import { Box } from '@mui/material'
import ActiveLink from './ActiveLink'
import { MENU } from './config'

const Menu: React.FC = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 7,
      left: '50%',
      transform: 'translateX(-50%)',
      display: { xs: 'none', md: 'block' },
      bgcolor: 'background.paper',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'rgba(0,0,0,0.5)',
      p: '4px',
      borderRadius: '8px',
      height: 50
    }}
  >
    <Box
      sx={{
        display: 'flex',
        borderRadius: '6px',
        overflow: 'hidden',
        height: 42
      }}
    >
      {MENU.map((item) => (
        <ActiveLink href={item.link} label={item.label} />
      ))}
    </Box>
  </Box>
)

export default Menu
