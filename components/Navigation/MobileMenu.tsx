import { Badge, IconButton, Menu } from '@iotabots/components'
import { MenuItem } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import Twitter from '@mui/icons-material/Twitter'
import ActiveLink from '../ActiveLink'
import { MOBILE_MENU } from './menu'

interface Props {
  mobileMenuId: string
  mobileMoreAnchorEl: null | HTMLElement
  setMobileMoreAnchorEl: Dispatch<SetStateAction<HTMLElement>>
}

const MobileMenu: React.FC<Props> = (props) => {
  const {
    mobileMenuId,
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl
  } = props

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = (): void => {
    setMobileMoreAnchorEl(null)
  }

  return (
    <Menu
      id={mobileMenuId}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {MOBILE_MENU.map((item) => (
        <MenuItem key={item.label}>
          <ActiveLink href={item.link} label={item.label} />
        </MenuItem>
      ))}
      <MenuItem>
        <IconButton
          onClick={
            () => window.open(
              'https://twitter.com/iotabots', '_blank'
            )
          }
          size='large'
          aria-label='show 1 new tweets'
          color='inherit'
        >
          <Badge badgeContent={1} color='error'>
            <Twitter />
          </Badge>
        </IconButton>
      </MenuItem>
    </Menu>
  )
}

export default MobileMenu
