const BOTS = { link: '/bots', label: 'Bots' }
const PROJECTS = { link: '/projects', label: 'Projects' }
const PROFILE = { link: '/profile', label: 'Profile' }
const FAQ = { link: '/faq', label: 'FAQ' }

// Hides anything except the LOGO (MENU[0]) - see Navigation.tsx
export const MENU = [BOTS, PROJECTS, FAQ]

// Only visible for mobile screens
export const MOBILE_MENU = [BOTS, PROJECTS, PROFILE, FAQ]
