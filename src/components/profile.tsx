import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import MyTheme from '../theme';
import useAttendeeService from '../services/useAttendeeService';
import AttendeeAvatar from './attendeeAvatar';
import ProfileTable from './profileTable';
import ActionButton from './actionButton';

const Footer = styled.h1`
  margin: 0;
  padding-top: 16px;
  height: 80px;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: ${MyTheme.palette.background.default};
`;

// TODO refactor
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
          <Footer>
            <ActionButton variant="contained" color="primary" disabled={attendee.checked_in}>{buttonText}</ActionButton>
          </Footer>
        </React.Fragment>
      );
    }
  }

  return <div>There is an unexpected error, please refresh the page.</div>;
};

export default Profile;
