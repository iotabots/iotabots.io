import React from 'react'
import { Menu } from '@iotabots/components'
import { Box, MenuItem } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import ActiveLink from './ActiveLink'
import { MOBILE_MENU } from './config'
import IconButton from '../IconButton'

const MobileMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const mobileMenuId = 'mobile-menu'

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <Box>
        <IconButton
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuRoundedIcon />
        </IconButton>
      </Box>
      <Menu
        id={mobileMenuId}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            p: 2,
            py: 2,
            bgcolor: 'rgb(0,0,0,0.5)',
            backdropFilter: 'blur(8px)',
            borderStyle: 'solid',
            borderColor: 'rgba(0,0,0,0.5)',
            borderWidth: 2,
            boxSizing: 'border-box',
            borderRadius: '8px'
          },
          '& .MuiList-root': {
            p: 0
          }
        }}
      >
        {MOBILE_MENU.map((item) => (
          <MenuItem
            sx={{
              p: 0,
              width: '100%',
              '& .MuiBox-root': {
                borderRadius: '8px',
                overflow: 'hidden',
                width: '100%',
              }
            }}
            key={item.label}
            onClick={handleClose}
          >
            <ActiveLink href={item.link} label={item.label} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default MobileMenu
