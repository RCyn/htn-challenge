import React from "react";
// import styled from 'styled-components';
import { makeStyles, createStyles, Theme, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import MyTheme from "../theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    primary: {
      display: 'flex',
      bottom: theme.spacing(3),
      textAlign: "center",
      width: "80%",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      marginLeft: '10%',
      marginRight: '10%',
      padding: theme.spacing(2),
      zIndex: 2,
    },
    secondary: {
      display: 'flex',
      width: "70%",
      marginBottom: theme.spacing(2),
      marginLeft: "25%",
      marginRight: "5%",
      padding: theme.spacing(1),
      border: '2px solid',
    },
    icon: {
      paddingLeft: theme.spacing(2),
    },
  })
);

const ButtonTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: MyTheme.palette.primary.light,
    },
    secondary: {
      main: MyTheme.palette.secondary.main,
    }
  }
});

/**
 * Component for primary, secondary, and external link action buttons in app.
 * 
 * @param variant button styles
 * @param color button color
 * 
 * optional params:
 * @param {boolean} disabled default: false
 * @param {string} target target for external link buttons
 * @param {string} href href for external link buttons
 * @param {Function} onClick click handler
 * 
 * @return {React.FC}
 */

interface Props {
  variant: "text" | "outlined" | "contained" | undefined;
  color: "inherit" | "primary" | "secondary" | "default" | undefined;
  disabled?: boolean;
  target?: string;
  href?: string;
  onClick?: () => void;
}

const ActionButton: React.FC<Props> = ({ variant, color, children, disabled=false, target, href, onClick }) => {
  const style = useStyles();

  if (color === "primary") {
    if (onClick) {
      return (
        <ThemeProvider theme={ButtonTheme} >
          <Button variant={variant} color={color} className={style.primary} disabled={disabled} onClick={onClick}>
            {children}
          </Button>
        </ThemeProvider>
      );
    }
    return (
      <ThemeProvider theme={ButtonTheme} >
        <Button variant={variant} color={color} className={style.primary} disabled={disabled}>
          {children}
        </Button>
      </ThemeProvider>
    );
  } else if (target && href) {
    return (
      <ThemeProvider theme={ButtonTheme} >
        <Button variant={variant} color={color} className={style.secondary} disabled={disabled} target={target} href={href}>
          {children}
          <OpenInNewIcon className={style.icon} />
        </Button>
      </ThemeProvider>
    )
  };
  if (onClick) {
    return (
      <ThemeProvider theme={ButtonTheme} >
        <Button variant={variant} color={color} className={style.secondary} disabled={disabled} onClick={onClick}>
          {children}
        </Button>
      </ThemeProvider>
    );
  };
  return (
    <ThemeProvider theme={ButtonTheme} >
      <Button variant={variant} color={color} className={style.secondary} disabled={disabled}>
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default ActionButton;
