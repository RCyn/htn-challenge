import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import theme from './theme';
import ProfilePage from './pages/profile';
import TopBar from './components/topBar';
import LoginPage from './pages/login';

/**
 * Main App: toggles between login page and attendee profile
 * 
 * toggle is implemented with React hook
 * 
 */

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
          <ProfilePage url="https://hackthenorth.netlify.com/api/fe-challenge-attendee"/>
        </React.Fragment>
      }
    </ThemeProvider>
  );
};

export default App;
