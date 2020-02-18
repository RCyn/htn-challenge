// Each attendee will belong to one of the following groups
type AttendeeType = "hacker" | "organizer" | "volunteer" | "sponsor";

// Actions that can be applied to a profile
// Note: some actions will only appear on profiles of certain types! (ex. call_phone for an "organizer")
type Action = "check_in" | "attend_workshop" | "call_phone";

// A profile for an attendee will look like so
export interface AttendeeProfile {
  id: number;
  name: string;
  profile_pic: string; // a url to an image
  bio?: string; // a paragraph describing the attendee
  type: AttendeeType;
  checked_in: boolean;
  actions: Action[];
  num_workshops_attended?: number; // only present for attendees that are "hacker" type
  sponsor_company?: string; // only present for attendees that are "sponsor" type
  sponsor_company_link?: string; // only present for attendees that are "sponsor" type
  next_shift?: string; // only present for attendees that are "volunteer" type
  phone_number?: string; // only present for attendees that are "organizer" type
}

// What the endpoint will return (null means no profile was found)
export type EndpointResponse = AttendeeProfile | null;
