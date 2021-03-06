import React from "react";
import { makeStyles, createStyles, createMuiTheme, Theme, ThemeProvider } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Badge from '@material-ui/core/Badge';

import MyTheme from "../theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      marginTop: "56px",
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
      backgroundColor: MyTheme.palette.primary.main
    },
    avatar: {
      margin: "auto",
      width: theme.spacing(8),
      height: theme.spacing(8)
    }
  })
);

const BadgeTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
  }
});

/**
 * Component to display attendee avatar, name, and type.
 * Avatar also includes a status badge.
 * 
 * @param {string} url path to avatar picture
 * @param {string} name name of attendee
 * @param {string} type type of attendee
 * @param {boolean} checkedIn checked in statuses
 * 
 * @return {React.FC}
 */

interface Props {
  url: string;
  name: string;
  type: string;
  checkedIn: boolean;
}

const AttendeeAvatar: React.FC<Props> = ({ url, name, type, checkedIn }) => {
  const style = useStyles();

  return (
    <div className={style.root}>
      <ThemeProvider theme={BadgeTheme}>
        <Badge
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          color={checkedIn ? "primary" : "error"}
          overlap="circle"
          badgeContent=" "
        >
          <Avatar alt={name} src={url} className={style.avatar} />
        </Badge>
      </ThemeProvider>
      <h1>{name}</h1>
      <h2>{type}</h2>
    </div>
  );
};

export default AttendeeAvatar;
