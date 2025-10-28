import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Announcement_Key {
  id: UUIDString;
  __typename?: 'Announcement_Key';
}

export interface CreateNewEventData {
  event_insert: Event_Key;
}

export interface CreateNewEventVariables {
  title: string;
  description: string;
  location: string;
  startDate: TimestampString;
  endDate: TimestampString;
  rsvpRequired: boolean;
  imageUrl?: string | null;
}

export interface Event_Key {
  id: UUIDString;
  __typename?: 'Event_Key';
}

export interface GetCurrentUserProfileData {
  user?: {
    id: UUIDString;
    displayName: string;
    email: string;
    phoneNumber?: string | null;
    photoUrl?: string | null;
    address?: string | null;
    role: string;
    createdAt: TimestampString;
  } & User_Key;
}

export interface GetCurrentUserProfileVariables {
  id: UUIDString;
}

export interface ListUpcomingEventsData {
  events: ({
    id: UUIDString;
    title: string;
    description: string;
    location: string;
    startDate: TimestampString;
    endDate: TimestampString;
    rsvpRequired?: boolean | null;
    imageUrl?: string | null;
  } & Event_Key)[];
}

export interface Ministry_Key {
  id: UUIDString;
  __typename?: 'Ministry_Key';
}

export interface RSVP_Key {
  id: UUIDString;
  __typename?: 'RSVP_Key';
}

export interface UpdateUserProfileData {
  user_update?: User_Key | null;
}

export interface UpdateUserProfileVariables {
  id: UUIDString;
  displayName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  photoUrl?: string | null;
  address?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateNewEventRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewEventVariables): MutationRef<CreateNewEventData, CreateNewEventVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewEventVariables): MutationRef<CreateNewEventData, CreateNewEventVariables>;
  operationName: string;
}
export const createNewEventRef: CreateNewEventRef;

export function createNewEvent(vars: CreateNewEventVariables): MutationPromise<CreateNewEventData, CreateNewEventVariables>;
export function createNewEvent(dc: DataConnect, vars: CreateNewEventVariables): MutationPromise<CreateNewEventData, CreateNewEventVariables>;

interface ListUpcomingEventsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUpcomingEventsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUpcomingEventsData, undefined>;
  operationName: string;
}
export const listUpcomingEventsRef: ListUpcomingEventsRef;

export function listUpcomingEvents(): QueryPromise<ListUpcomingEventsData, undefined>;
export function listUpcomingEvents(dc: DataConnect): QueryPromise<ListUpcomingEventsData, undefined>;

interface UpdateUserProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserProfileVariables): MutationRef<UpdateUserProfileData, UpdateUserProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserProfileVariables): MutationRef<UpdateUserProfileData, UpdateUserProfileVariables>;
  operationName: string;
}
export const updateUserProfileRef: UpdateUserProfileRef;

export function updateUserProfile(vars: UpdateUserProfileVariables): MutationPromise<UpdateUserProfileData, UpdateUserProfileVariables>;
export function updateUserProfile(dc: DataConnect, vars: UpdateUserProfileVariables): MutationPromise<UpdateUserProfileData, UpdateUserProfileVariables>;

interface GetCurrentUserProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCurrentUserProfileVariables): QueryRef<GetCurrentUserProfileData, GetCurrentUserProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCurrentUserProfileVariables): QueryRef<GetCurrentUserProfileData, GetCurrentUserProfileVariables>;
  operationName: string;
}
export const getCurrentUserProfileRef: GetCurrentUserProfileRef;

export function getCurrentUserProfile(vars: GetCurrentUserProfileVariables): QueryPromise<GetCurrentUserProfileData, GetCurrentUserProfileVariables>;
export function getCurrentUserProfile(dc: DataConnect, vars: GetCurrentUserProfileVariables): QueryPromise<GetCurrentUserProfileData, GetCurrentUserProfileVariables>;

