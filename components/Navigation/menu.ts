const LOGO = { link: '/', label: 'IOTABOTS' }
const HOME = { link: '/', label: 'Start' }
const BOTS = { link: '/bots', label: 'Bots' }
const PROJECTS = { link: '/projects', label: 'Projects' }
const PROFILE = { link: '/profile', label: 'Profile' }
const FAQ = { link: '/faq', label: 'FAQ' }

// Hides anything except the LOGO (MENU[0]) - see Navigation.tsx
export const MENU = [LOGO, BOTS, PROJECTS, FAQ]

// Only visible for mobile screens
export const MOBILE_MENU = [HOME, BOTS, PROJECTS, PROFILE, FAQ]
