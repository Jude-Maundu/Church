const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'church',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createNewEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewEvent', inputVars);
}
createNewEventRef.operationName = 'CreateNewEvent';
exports.createNewEventRef = createNewEventRef;

exports.createNewEvent = function createNewEvent(dcOrVars, vars) {
  return executeMutation(createNewEventRef(dcOrVars, vars));
};

const listUpcomingEventsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUpcomingEvents');
}
listUpcomingEventsRef.operationName = 'ListUpcomingEvents';
exports.listUpcomingEventsRef = listUpcomingEventsRef;

exports.listUpcomingEvents = function listUpcomingEvents(dc) {
  return executeQuery(listUpcomingEventsRef(dc));
};

const updateUserProfileRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserProfile', inputVars);
}
updateUserProfileRef.operationName = 'UpdateUserProfile';
exports.updateUserProfileRef = updateUserProfileRef;

exports.updateUserProfile = function updateUserProfile(dcOrVars, vars) {
  return executeMutation(updateUserProfileRef(dcOrVars, vars));
};

const getCurrentUserProfileRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCurrentUserProfile', inputVars);
}
getCurrentUserProfileRef.operationName = 'GetCurrentUserProfile';
exports.getCurrentUserProfileRef = getCurrentUserProfileRef;

exports.getCurrentUserProfile = function getCurrentUserProfile(dcOrVars, vars) {
  return executeQuery(getCurrentUserProfileRef(dcOrVars, vars));
};
