import React from 'react';

import useAttendeeService from '../services/useAttendeeService';

interface Props {
  url: string;
}

const Profile: React.FC<Props> = ({ url }) => {
  const service = useAttendeeService(url);

  if (service.status === 'loading') {
    return <div>Loading...</div>;
  } else if (service.status === 'error' || (service.status === 'loaded' && service.payload === null)) {
    return <div>Error message</div>;
  } else if (service.status === 'loaded' && service.payload !== null) {
    return (
      <div>
        <h2>{service.payload.name}</h2>
        ...
      </div>
    );
  }

  return <div>Error message</div>;
};

export default Profile;
