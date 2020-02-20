import { useEffect, useState } from 'react';

import { Service } from '../types/service';
import { AttendeeProfile } from '../types/attendeeProfile';

/**
 * React hook for GET call to fetch attendee profile
 * incorporates different stages of service to handle different error cases.
 * 
 * @param {string} url service url
 * 
 * @return {Service} return a service status:
 *                        loading: request is sent
 *                        loaded: payload as AttendeeProfile or null
 *                        error: encountered network error
 */

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
