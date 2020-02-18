import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      backgroundColor: '#314158',
    },
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    }
  }),
);

interface Props {
  url: string;
  name: string;
}

const AttendeeAvatar: React.FC<Props> = ({ url, name }) => {
  const style = useStyles();
  return (
    <div className={style.root}>
      <Avatar alt={name} src={url} className={style.avatar}/>
    </div>
  )
}

export default AttendeeAvatar;
