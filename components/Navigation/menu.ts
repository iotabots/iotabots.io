const LOGO = { link: '/', label: 'IOTABOTS' }
const HOME = { link: '/', label: 'Home' }
const BOTS = { link: '/bots', label: 'Bots' }
const PROFILE = { link: '/profile', label: 'Profile' }

// Hides anything except the LOGO (MENU[0]) - see Navigation.tsx
export const MENU = [LOGO, HOME, BOTS]

// Only visible for mobile screens
export const MOBILE_MENU = [HOME, BOTS, PROFILE]
