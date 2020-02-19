import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import theme from './theme';
import Profile from './components/profile'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Profile url="https://hackthenorth.netlify.com/api/fe-challenge-attendee"/>
    </ThemeProvider>
  );
};

export default App;
