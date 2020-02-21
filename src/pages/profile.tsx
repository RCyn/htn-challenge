import React from 'react';
import styled from 'styled-components';

import MyTheme from '../theme';
import useAttendeeService from '../services/useAttendeeService';
import AttendeeAvatar from '../components/attendeeAvatar';
import ProfileTable from '../components/profileTable';
import ActionButton from '../components/actionButton';
import { ErrorMessage, InfoMessage } from '../components/messageDisplay';
import { AttendeeProfile } from '../types/attendeeProfile';

// Footer for check-in button using styled component
const Footer = styled.h1`
  margin: 0;
  padding-top: 16px;
  height: 80px;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: ${MyTheme.palette.background.default};
`;

/**
 * Component for displaying full attendee profile and
 * handles check in functionality
 * 
 * @param {AttendeeProfile} attendee the attendee with full profile
 * 
 * @return {React.FC}
 */

interface ProfileProps {
  attendee: AttendeeProfile;
}

const Profile: React.FC<ProfileProps> = ({ attendee }) => {
  const [hasCheckedIn, setCheckIn] = React.useState(attendee.checked_in);

  const handleCheckIn = () => {
    setCheckIn(!hasCheckedIn);
  };

  const buttonText = hasCheckedIn ? "Checked In" : "Check In";
  return (
    <React.Fragment>
      <AttendeeAvatar name={attendee.name} url={attendee.profile_pic} type={attendee.type} checkedIn={hasCheckedIn}/>
      <ProfileTable attendee={attendee} />
      <Footer>
        <ActionButton variant="contained" color="primary" disabled={hasCheckedIn} onClick={handleCheckIn}>{buttonText}</ActionButton>
      </Footer>
    </React.Fragment>
  );
}

/**
 * Page Component for getting attendee profile and render page, 
 * also catches different types of error and displays error message accordingly.
 * 
 * @param {string} url service url
 * 
 * @return {React.FC}
 */

interface Props {
  url: string;
}

const ProfilePage: React.FC<Props> = ({ url }) => {
  const service = useAttendeeService(url);

  if (service.status === 'loading') {
    return <InfoMessage>Loading...</InfoMessage>;
  } else if (service.status === 'error') {
    return <ErrorMessage>Unexpected network error. Please try again.</ErrorMessage>;
  } else if (service.status === 'loaded') {
    if (service.payload === null) {
      return <ErrorMessage>No attendee profile found. Please contact support.</ErrorMessage>;
    } else {
      return <Profile attendee={service.payload} />
    }
  }

  return <ErrorMessage>There is an unexpected error. Please refresh the page.</ErrorMessage>;
};

export default ProfilePage;
