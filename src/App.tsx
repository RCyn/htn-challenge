import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import theme from './theme';
import Controller from './components/controller'
import TopBar from './components/topBar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar>Profile</TopBar>
      <Controller url="https://hackthenorth.netlify.com/api/fe-challenge-attendee"/>
    </ThemeProvider>
  );
};

export default App;
