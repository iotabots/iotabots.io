import * as React from 'react';
import Router from 'next/router'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, IconButton, Typography, Badge, MenuItem, Menu } from '@iotabots/components'
import ActiveLink from './ActiveLink'
import ConnectButton from './Connector/ConnectButton'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { ModeContext } from '../contexts/Theme'
import MoreIcon from '@mui/icons-material/MoreVert';
import Twitter from '@mui/icons-material/Twitter';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'

export default function PrimarySearchAppBar() {
    const { mode, toggleMode } = React.useContext(ModeContext)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const context = useWeb3React<Web3Provider>()

    const { connector, library, chainId, account, activate, deactivate, active, error } = context

    console.log("connector", connector)
    console.log("account", account)

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
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
                    activeClassName="active"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#02c692" : ""
                        };
                    }} href="/">
                    <a>Home</a>
                </ActiveLink>
            </MenuItem>
            <MenuItem>
                <ActiveLink
                    activeClassName="active"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#02c692" : ""
                        };
                    }}
                    href="/bots">
                    <a>Bots</a>
                </ActiveLink>
            </MenuItem>
            <MenuItem>
                <ActiveLink
                    activeClassName="active"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#02c692" : ""
                        };
                    }}
                    href="/profile">
                    <a>Profile</a>
                </ActiveLink>
            </MenuItem>
            <MenuItem

            >
                <IconButton
                    onClick={() => window.open('https://twitter.com/iotabots', '_blank')}
                    size="large"
                    aria-label="show 1 new tweets"
                    color="inherit"
                >
                    <Badge badgeContent={1} color="error">
                        <Twitter />
                    </Badge>
                </IconButton>
            </MenuItem>
        </Menu>
    );


    let profile;
    if (account) {
        profile = <ActiveLink
            activeClassName="active"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#02c692" : ""
                };
            }}
            className="nav-link" href="/profile">
            <a>Profile({account.substring(0, 5)})</a>
        </ActiveLink>

    } else {
        profile = <ConnectButton />;
    }

    return (
        <Box sx={{ flexGrow: 1, position: 'fixed', zIndex: 1000, top: 0, left: 0, width: '100%' }} className='flex-header'>
            <AppBar
                position="static"
                sx={{ 
                    bgcolor: 'background.paper',
                    height: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    '& a': {
                        color: 'text.primary',
                        '&.active': {
                            color: 'primary.main'
                        }
                    }
                }}
            >
                <Toolbar
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{ display: { xs: 'block', sm: 'block' }, mr: 6 }}
                        >
                            <ActiveLink
                                activeClassName="active"
                                className="nav-link" href="/">
                                <a>IOTABOTS</a>
                            </ActiveLink>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <ActiveLink
                                activeClassName="active"
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "#02c692" : ""
                                    };
                                }}
                                className="nav-link" href="/">
                                <a>Home</a>
                            </ActiveLink>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, mx: 3 }}>|</Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <ActiveLink
                                activeClassName="active"
                                className="nav-link" href="/bots"
                            >
                                <a>Bots</a>
                            </ActiveLink>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <IconButton sx={{ color: 'text.primary' }} onClick={() => toggleMode()}>
                            {mode === 'dark'
                                ? <WbSunnyRoundedIcon color='inherit' />
                                : <DarkModeRoundedIcon color='inherit' />
                            }
                        </IconButton>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 3 }}>
                            {profile}
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}