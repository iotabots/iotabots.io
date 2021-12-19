import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  spacing: 10,

  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1700,
    },
  },

  typography: {
    fontFamily: [
      'Press Start 2P',
      'Roboto',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },

  palette: {
    primary: {
      light: '#757ce8',
      main: '#2b2b2b',
      dark: '#002884',
      contrastText: '#fff',
    },

    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },

    error: {
      main: red.A400,
    },
  },
});

export default theme;