import React from "react";
// import styled from 'styled-components';
import { makeStyles, createStyles, Theme, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import MyTheme from "../theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    primary: {
      display: 'flex',
      position: 'fixed',
      bottom: theme.spacing(4),
      textAlign: "center",
      width: "80%",
      marginTop: theme.spacing(2),
      marginLeft: '10%',
      marginRight: '10%',
      padding: theme.spacing(2),
    },
    secondary: {
      display: 'flex',
      width: "80%",
      marginTop: theme.spacing(2),
      marginLeft: '10%',
      marginRight: '10%',
      padding: theme.spacing(2),
    }
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

interface Props {
  variant: "text" | "outlined" | "contained" | undefined;
  color: "inherit" | "primary" | "secondary" | "default" | undefined;
  disabled?: boolean;
}

const ActionButton: React.FC<Props> = ({ variant, color, children, disabled=false }) => {
  const style = useStyles();
  if (color === "primary") {
    return (
      <ThemeProvider theme={ButtonTheme} >
        <Button variant={variant} color={color} className={style.primary} disabled={disabled}>
          {children}
        </Button>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={ButtonTheme} >
      <Button variant={variant} color={color} className={style.secondary} disabled={disabled}>
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default ActionButton;
