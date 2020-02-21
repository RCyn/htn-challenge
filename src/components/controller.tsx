import React from 'react';
import styled from 'styled-components';

import MyTheme from '../theme';
import useAttendeeService from '../services/useAttendeeService';
import AttendeeAvatar from './attendeeAvatar';
import ProfileTable from './profileTable';
import ActionButton from './actionButton';
import { ErrorMessage, InfoMessage } from './messageDisplay';

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
 * Controller Component for getting attendee profile and render page, 
 * also catches different types of error and displays error message accordingly.
 * 
 * @param {string} url service url
 * 
 * @return {React.FC}
 */

interface Props {
  url: string;
}

const Profile: React.FC<Props> = ({ url }) => {
  const service = useAttendeeService(url);

  if (service.status === 'loading') {
    return <InfoMessage>Loading...</InfoMessage>;
  } else if (service.status === 'error') {
    return <ErrorMessage>Unexpected network error. Please try again.</ErrorMessage>;
  } else if (service.status === 'loaded') {
    if (service.payload === null) {
      return <ErrorMessage>No attendee profile found. Please contact support.</ErrorMessage>;
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

  return <ErrorMessage>There is an unexpected error. Please refresh the page.</ErrorMessage>;
};

export default Profile;
