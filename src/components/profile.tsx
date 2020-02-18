import React from 'react';

import useAttendeeService from '../services/useAttendeeService';
import AttendeeAvatar from './attendeeAvatar';

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
      return (
        <div>
          <AttendeeAvatar name={service.payload.name} url={service.payload.profile_pic} />
          <h2>{service.payload.name}</h2>
          ...
        </div>
      );
    }
  }

  return <div>There is an unexpected error, please refresh the page.</div>;
};

export default Profile;
