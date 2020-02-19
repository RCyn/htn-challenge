import { createMuiTheme, Theme } from '@material-ui/core';

const theme: Theme = createMuiTheme({
  typography: {
    fontFamily: ['Lato', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      light: '#417C95', // highlight
      main: '#D9DEE3',
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

export default theme;
