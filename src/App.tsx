import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import theme from './theme';
import Controller from './components/controller';
import TopBar from './components/topBar';
import LoginPage from './pages/login';

interface State {
  isLoggedIn: boolean;
}

function App() {
  const [isLoggedIn, setLogin] = React.useState(false);

  const handleLogin = () => {
    setLogin(!isLoggedIn);
  }
  return (
    <ThemeProvider theme={theme}>
      { !isLoggedIn &&
        <React.Fragment>
          <TopBar>Login</TopBar>
          <LoginPage handleLogin={handleLogin} />
        </React.Fragment>
      }
      { isLoggedIn &&
        <React.Fragment>
          <TopBar>Profile</TopBar>
          <Controller url="https://hackthenorth.netlify.com/api/fe-challenge-attendee"/>
        </React.Fragment>
      }
    </ThemeProvider>
  );
};

export default App;
