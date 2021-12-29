import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import {
  Avatar,
  Box,
  IconButton,
  makeStyles,
  Theme,
} from '@iotabots/components'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'

import Link from 'next/link'
import MoreIcon from '@mui/icons-material/MoreVert'
import ConnectButton from '../Connector/ConnectButton'
import ActiveLink from '../ActiveLink'
import ToggleMode from '../ToggleMode'
import { MENU } from './menu'
import MobileMenu from './MobileMenu'

export const Navigation: React.FC = () => {
  const classes = useStyles()

  const context = useWeb3React<Web3Provider>()
  const { account } = context

  const mobileMenuId = 'primary-search-account-menu-mobile'

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null)

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  function stringToColor(string: string): any {
    let hash = 0
    let i

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.substr(-2)
    }
    /* eslint-enable no-bitwise */

    return color
  }

  function stringAvatar(name: string): any {
    return {
      sx: {
        bgcolor: stringToColor(name),
        color: 'text.primary',
      },
      children: name.substring(2, 4),
    }
  }

  let profilePicture
  if (account) {
    if (account) {
      // TODO - fetch current IOTABOT
      profilePicture = (
        <div className={classes.profilePicture}>
          <Link href='/profile'>
            <Avatar
              alt='IOTABOT #1'
              src='https://assets.iotabots.io/compressed/1.png'
              sx={{ width: 56, height: 56 }}
            />
          </Link>
        </div>
      )
    } else {
      profilePicture = (
        <div className={classes.profilePicture}>
          <Link href='/profile'>
            <Avatar {...stringAvatar(account)} sx={{ width: 56, height: 56 }} />
          </Link>
        </div>
      )
    }
  } else {
    profilePicture = <ConnectButton />
  }

  return (
    <AppBar className={classes.app}>
      <Toolbar
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {MENU.map((item, index) => (
            <Box
              key={item.label}
              sx={
                // Assuming Logo is the first Link in MENU Array
                index === 0
                  ? { display: 'flex', mr: 6 }
                  : { display: { xs: 'none', md: 'flex' }, mr: 6 }
              }
            >
              <ActiveLink href={item.link} label={item.label} />
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ToggleMode />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 3 }}>
            {profilePicture}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              {account ? profilePicture : <MoreIcon />}
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
      <MobileMenu
        mobileMenuId={mobileMenuId}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        setMobileMoreAnchorEl={setMobileMoreAnchorEl}
      />
    </AppBar>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    position: 'sticky',
    zIndex: 1000,
    top: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 1,
    background: `${theme.palette.background.paper} !important`,

    '& .MuiTypography-root': {
      color: theme.palette.text.primary,
      cursor: 'pointer',

      '&.active': {
        color: theme.palette.primary.main,
      },
    },
  },
  profilePicture: {
    cursor: 'pointer',
  },
}))
