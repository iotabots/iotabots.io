import { Badge, IconButton, Menu, Typography } from '@iotabots/components'
import { MenuItem } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import Twitter from '@mui/icons-material/Twitter'
import ActiveLink from '../ActiveLink'

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
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <ActiveLink
          activeClassName='active'
          href='/'
        >
          <Typography>Home</Typography>
        </ActiveLink>
      </MenuItem>
      <MenuItem>
        <ActiveLink
          activeClassName='active'
          href='/bots'
        >
          <Typography>Bots</Typography>
        </ActiveLink>
      </MenuItem>
      <MenuItem>
        <ActiveLink
          activeClassName='active'
          href='/profile'
        >
          <Typography>Profile</Typography>
        </ActiveLink>
      </MenuItem>
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
