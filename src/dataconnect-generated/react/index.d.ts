import { CreateNewEventData, CreateNewEventVariables, ListUpcomingEventsData, UpdateUserProfileData, UpdateUserProfileVariables, GetCurrentUserProfileData, GetCurrentUserProfileVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateNewEvent(options?: useDataConnectMutationOptions<CreateNewEventData, FirebaseError, CreateNewEventVariables>): UseDataConnectMutationResult<CreateNewEventData, CreateNewEventVariables>;
export function useCreateNewEvent(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewEventData, FirebaseError, CreateNewEventVariables>): UseDataConnectMutationResult<CreateNewEventData, CreateNewEventVariables>;

export function useListUpcomingEvents(options?: useDataConnectQueryOptions<ListUpcomingEventsData>): UseDataConnectQueryResult<ListUpcomingEventsData, undefined>;
export function useListUpcomingEvents(dc: DataConnect, options?: useDataConnectQueryOptions<ListUpcomingEventsData>): UseDataConnectQueryResult<ListUpcomingEventsData, undefined>;

export function useUpdateUserProfile(options?: useDataConnectMutationOptions<UpdateUserProfileData, FirebaseError, UpdateUserProfileVariables>): UseDataConnectMutationResult<UpdateUserProfileData, UpdateUserProfileVariables>;
export function useUpdateUserProfile(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserProfileData, FirebaseError, UpdateUserProfileVariables>): UseDataConnectMutationResult<UpdateUserProfileData, UpdateUserProfileVariables>;

export function useGetCurrentUserProfile(vars: GetCurrentUserProfileVariables, options?: useDataConnectQueryOptions<GetCurrentUserProfileData>): UseDataConnectQueryResult<GetCurrentUserProfileData, GetCurrentUserProfileVariables>;
export function useGetCurrentUserProfile(dc: DataConnect, vars: GetCurrentUserProfileVariables, options?: useDataConnectQueryOptions<GetCurrentUserProfileData>): UseDataConnectQueryResult<GetCurrentUserProfileData, GetCurrentUserProfileVariables>;
