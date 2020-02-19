import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../theme';
import useAttendeeService from '../services/useAttendeeService';
import AttendeeAvatar from './attendeeAvatar';
import ProfileTable from './profileTable';
import ActionButton from './actionButton';

interface Props {
  url: string;
}

const Profile: React.FC<Props> = ({ url }) => {
  const service = useAttendeeService(url);

  if (service.status === 'loading') {
    return <div>Loading...</div>;
  } else if (service.status === 'error') {
    return <div>Unexpected network error, please try again.</div>;
  } else if (service.status === 'loaded') {
    if (service.payload === null) {
      return <div>No attendee profile found, please contact support.</div>;
    } else {
      const attendee = service.payload;
      const buttonText = attendee.checked_in ? "Checked In" : "Check In";
      return (
        <React.Fragment>
          <AttendeeAvatar name={attendee.name} url={attendee.profile_pic} type={attendee.type} checkedIn={attendee.checked_in}/>
          <ProfileTable attendee={attendee} />
          <ActionButton variant="contained" color="primary" disabled={attendee.checked_in}>{buttonText}</ActionButton>
        </React.Fragment>
      );
    }
  }

  return <div>There is an unexpected error, please refresh the page.</div>;
};

export default Profile;
