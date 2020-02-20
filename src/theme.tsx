import { createMuiTheme, Theme } from '@material-ui/core';

const MyTheme: Theme = createMuiTheme({
  typography: {
    fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h2: {
      fontWeight: 400,
      fontSize: '1rem',
    },
    body1: {
      fontWeight: 300,
      fontSize: '1.25rem',
    },
    body2: {
      fontWeight: 300,
      fontSize: '1rem',
    }
  },
  palette: {
    primary: {
      light: '#417C95', // highlight
      main: '#6C89A9',
      contrastText: '#202932',
    },
    secondary: {
      main: '#366381',
      dark: '#173C51', // tertiary
      contrastText: '#7E939C',
    },
    text: {
      primary: '#202932',
      secondary: '#2F3B48',
      disabled: '#7E939C',
      hint: '#4F6073',
    },
    background: {
      default: '#D9DEE3',
    },
  },
  shape: {
    borderRadius: 2,
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

export default MyTheme;
