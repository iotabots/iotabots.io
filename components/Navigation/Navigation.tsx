import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import MobileMenu from './MobileMenu'
import Logo from '../Logo'
import Menu from './Menu'
import IdentityMenu from './IdentityMenu'


export const Navigation: React.FC = () => (
  <AppBar sx={{
    position: 'fixed',
    zIndex: 11,
    top: { xs: 40, md: 64 },
    left: { xs: 40, md: 64 },
    width: { xs: 'calc(100% - 80px)', md: 'calc(100% - 128px)' },
    display: 'flex',
    alignItems: 'center',
    flexShrink: 1,
    boxSizing: 'border-box',
    background: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(8px)',
    boxShadow: 'none',
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.5)',
    borderRadius: '8px'
  }}>
    <Toolbar
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Logo />
      <Menu />
      <IdentityMenu />
      <MobileMenu />
    </Toolbar>

  </AppBar >
)
