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

import toDateTime from '../utils/dateParser';
import { AttendeeProfile } from '../types/attendeeProfile';
import ActionButton from './actionButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      marginBottom: theme.spacing(12),
    },
    nested: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(4),
    },
  }),
);

// dropdown list for bio
interface BioProps {
  bio: string;
}
const Bio: React.FC<BioProps> = ({ bio }) => {
  const style = useStyles();

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
          <ListItem className={style.nested}>
            <ListItemText secondary={bio} />
          </ListItem>
        </List>
      </Collapse>
      <Divider variant='inset' component='li' />
    </React.Fragment>
  );
};

// List item to display Workshop attended,
// with a dropdown attend workshop button
interface WorkshopProps {
  numAttended: number;
  canAttend: boolean;
}

const Workshop: React.FC<WorkshopProps> = ({ numAttended, canAttend }) => {
  const style = useStyles();

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
        <ListItemText primary='Workshops' secondary={`Attended: ${numAttended}`} />
        {canAttend && (
          open ? <ExpandLess /> : <ExpandMore />
        )}
      </ListItem>
      {canAttend && (
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem className={style.nested}>
              <ActionButton variant="outlined" color="secondary" >Attend Workshop</ActionButton>
            </ListItem>
          </List>
        </Collapse>
      )}
      <Divider variant='inset' component='li' />
    </React.Fragment>
  );
};

// TODO refractor: conditional on sponsor link
// check for available actions

interface SponsorProps {
  company: string;
  link: string;
}

const Sponsor: React.FC<SponsorProps> = ({ company, link }) => {
  const style = useStyles();

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
        <ListItemText primary='Sponsor Company' secondary={company} />
        {link !== "" && 
          open ? <ExpandLess /> : <ExpandMore />
        }
      </ListItem>
      {link !== "" &&
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem className={style.nested}>
              <ActionButton variant="outlined" color="secondary" target="_blank" href={link}>Open Site</ActionButton>
            </ListItem>
          </List>
        </Collapse>
      }
      <Divider variant='inset' component='li' />
    </React.Fragment>
  );
};

// List item to display time of next shift
interface ShiftProps {
  nextShift: string
}

const Shift: React.FC<ShiftProps> = ({ nextShift }) => {
  const date = new Date(nextShift);

  return (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary='Next Shift' secondary={toDateTime(date)} />
      </ListItem>
      <Divider variant='inset' component='li' />
    </React.Fragment>
  );
};

// list item to display phone number
// dropdown for call phone
interface PhoneProps {
  phone: string;
  canCall: boolean;
}

const Phone: React.FC<PhoneProps> = ({ phone, canCall }) => {
  const style = useStyles();

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
        <ListItemText primary='Phone Number' secondary={phone} />
        {canCall &&
          open ? <ExpandLess /> : <ExpandMore />
        }
      </ListItem>
      {canCall &&
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem className={style.nested}>
              <ActionButton variant="outlined" color="secondary" >Call Phone</ActionButton>
            </ListItem>
          </List>
        </Collapse>
      }
      <Divider variant='inset' component='li' />
    </React.Fragment>
  );
};

/**
 * constructs profile details for the attendee in list format
 * 
 * @param {AttendeeProfile} attendee a random attendee's profile
 * 
 * @return {List}
 */

interface Props {
  attendee: AttendeeProfile;
}

const ProfileTable: React.FC<Props> = ({ attendee }) => {
  const style = useStyles();

  const actions = attendee.actions;
  const canAttendWorkshop = actions.includes("attend_workshop");
  const canCallPhone = actions.includes("call_phone");
  const link = attendee.sponsor_company_link ? attendee.sponsor_company_link : "";

  return (
    <List className={style.root}>
      {attendee.bio && <Bio bio={attendee.bio} />}
      {attendee.num_workshops_attended && <Workshop numAttended={attendee.num_workshops_attended} canAttend={canAttendWorkshop}/>}
      {attendee.sponsor_company && <Sponsor company={attendee.sponsor_company} link={link} />}
      {attendee.next_shift && <Shift nextShift={attendee.next_shift} />}
      {attendee.phone_number && <Phone phone={attendee.phone_number} canCall={canCallPhone} />}
    </List>
  );
};

export default ProfileTable;
