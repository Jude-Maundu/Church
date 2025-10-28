import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'church',
  location: 'us-east4'
};

export const createNewEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewEvent', inputVars);
}
createNewEventRef.operationName = 'CreateNewEvent';

export function createNewEvent(dcOrVars, vars) {
  return executeMutation(createNewEventRef(dcOrVars, vars));
}

export const listUpcomingEventsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUpcomingEvents');
}
listUpcomingEventsRef.operationName = 'ListUpcomingEvents';

export function listUpcomingEvents(dc) {
  return executeQuery(listUpcomingEventsRef(dc));
}

export const updateUserProfileRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserProfile', inputVars);
}
updateUserProfileRef.operationName = 'UpdateUserProfile';

export function updateUserProfile(dcOrVars, vars) {
  return executeMutation(updateUserProfileRef(dcOrVars, vars));
}

export const getCurrentUserProfileRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCurrentUserProfile', inputVars);
}
getCurrentUserProfileRef.operationName = 'GetCurrentUserProfile';

export function getCurrentUserProfile(dcOrVars, vars) {
  return executeQuery(getCurrentUserProfileRef(dcOrVars, vars));
}

