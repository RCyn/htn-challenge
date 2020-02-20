import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MyTheme from "../theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bar: {
      flexGrow: 1,
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 5,
      backgroundColor: MyTheme.palette.secondary.dark,
      color: '#ffffff',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

/**
 * Component for static top bar.
 * 
 * no params needed, built upon Material UI's app bar
 * 
 * @return {React.FC}
 */

interface Props {};
const TopBar: React.FC<Props> = ({children}) => {
  const style = useStyles();

  return (
    <AppBar position="static" className={style.bar}>
      <Toolbar>
        <IconButton edge="start" className={style.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        {children}
      </Toolbar>
    </AppBar>
  )
}

export default TopBar;
