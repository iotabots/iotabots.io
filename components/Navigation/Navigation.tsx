import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import {
  Box,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@iotabots/components'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
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

  const handleMobileMenuOpen = (
    event: React.MouseEvent<HTMLElement>
  ): void => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  let profile
  if (account) {
    profile = (
      <ActiveLink
        activeClassName='active'
        href='/profile'
      >
        <Typography>Profile({account.substring(0, 5)})</Typography>
      </ActiveLink>
    )
  } else {
    profile = <ConnectButton />
  }

  return (
    <AppBar
      position='static'
      className={classes.app}
    >
      <Toolbar
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {MENU.map((item) => (
            <Box
              key={item.label}
              sx={
                item.showMobile
                  ? { display: 'flex', mr: 6 }
                  : { display: { xs: 'none', md: 'flex' }, mr: 6 }
              }
            >
              <ActiveLink
                activeClassName='active'
                href={item.link}
              >
                <Typography>{item.label}</Typography>
              </ActiveLink>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ToggleMode />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 3 }}>
            {profile}
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
              <MoreIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
      <MobileMenu
        mobileMenuId={mobileMenuId}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        setMobileMoreAnchorEl={setMobileMoreAnchorEl}
      />
    </AppBar >
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    left: 0,
    height: 'inherit',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    background: `${theme.palette.background.paper} !important`,

    '& .MuiTypography-root': {
      color: theme.palette.text.primary,
      cursor: 'pointer',

      '&.active': {
        color: theme.palette.primary.main,
      },
    },
  }
}))
