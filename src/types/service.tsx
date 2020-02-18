// type for service states
// for POST API calls to send back data
interface ServiceInit {
  status: 'init';
}
// upon sending API request
interface ServiceLoading {
  status: 'loading';
}
// when receiving data from API call
interface ServiceLoaded<T> {
  status: 'loaded';
  payload: T | null;
}
// when network error occurs
interface ServiceError {
  status: 'error';
  error: Error;
}

export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;
