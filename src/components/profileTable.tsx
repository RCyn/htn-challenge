import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FaceIcon from '@material-ui/icons/Face';
import EventIcon from '@material-ui/icons/Event';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import WorkIcon from '@material-ui/icons/Work';
import PhoneIcon from '@material-ui/icons/Phone';

import { AttendeeProfile } from '../types/attendeeProfile';
import ActionButton from './actionButton';
import MyTheme from '../theme';

interface Props {
  attendee: AttendeeProfile;
}

const Bio: React.FC<Props> = ({ attendee }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary='Bio' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem>
            <ListItemText secondary={attendee.bio} />
          </ListItem>
        </List>
      </Collapse>
      <Divider variant='inset' component='li' />
    </React.Fragment>
  );
};

const Workshop: React.FC<Props> = ({ attendee }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary='Workshops' secondary={`Attended: ${attendee.num_workshops_attended}`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem>
            <ActionButton variant="outlined" color="secondary" >Attend Workshop</ActionButton>
          </ListItem>
        </List>
      </Collapse>
      <Divider variant='inset' component='li' />
    </React.Fragment>
  );
};

// TODO refractor: conditional on sponsor link
// check for available actions

const Sponsor: React.FC<Props> = ({ attendee }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <ListItemText primary='Shifts' secondary={attendee.sponsor_company} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem>
          <ListItemText secondary={attendee.sponsor_company_link ? attendee.sponsor_company_link : ''} />
          </ListItem>
        </List>
      </Collapse>
      <Divider variant='inset' component='li' />
    </React.Fragment>
  );
};

const Shift: React.FC<Props> = ({ attendee }) => {
  const nextShift = attendee.next_shift ? new Date(attendee.next_shift) : "";

  return (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary='Shifts' secondary={`Next Shift: ${nextShift.toString()}`} />
      </ListItem>
      <Divider variant='inset' component='li' />
    </React.Fragment>
  );
};

const Phone: React.FC<Props> = ({ attendee }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <PhoneIcon />
        </ListItemIcon>
        <ListItemText primary='Phone Number' secondary={attendee.phone_number} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem>
            <ActionButton variant="outlined" color="secondary" >Call Phone</ActionButton>
          </ListItem>
        </List>
      </Collapse>
      <Divider variant='inset' component='li' />
    </React.Fragment>
  );
};

const ProfileTable: React.FC<Props> = ({ attendee }) => {
  return (
    <List>
      {attendee.bio && <Bio attendee={attendee} />}
      {attendee.num_workshops_attended && <Workshop attendee={attendee}/>}
      {attendee.sponsor_company && <Sponsor attendee={attendee} />}
      {attendee.next_shift && <Shift attendee={attendee} />}
      {attendee.phone_number && <Phone attendee={attendee} />}
    </List>
  );
};

export default ProfileTable;
