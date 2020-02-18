import { useEffect, useState } from 'react';

import { Service } from '../types/service';
import { AttendeeProfile, EndpointResponse } from '../types/attendeeProfile';


const useAttendeeService = (url: string) => {
  const [result, setResult] = useState<Service<AttendeeProfile>>({
    status: 'loading'
  });

  useEffect(() => {
    if (url) {
      setResult({ status: 'loading' });
      fetch(url)
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
    }
  }, [url]);

  return result;
};

export default useAttendeeService;
