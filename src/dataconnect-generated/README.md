# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListUpcomingEvents*](#listupcomingevents)
  - [*GetCurrentUserProfile*](#getcurrentuserprofile)
- [**Mutations**](#mutations)
  - [*CreateNewEvent*](#createnewevent)
  - [*UpdateUserProfile*](#updateuserprofile)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListUpcomingEvents
You can execute the `ListUpcomingEvents` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listUpcomingEvents(): QueryPromise<ListUpcomingEventsData, undefined>;

interface ListUpcomingEventsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUpcomingEventsData, undefined>;
}
export const listUpcomingEventsRef: ListUpcomingEventsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUpcomingEvents(dc: DataConnect): QueryPromise<ListUpcomingEventsData, undefined>;

interface ListUpcomingEventsRef {
  ...
  (dc: DataConnect): QueryRef<ListUpcomingEventsData, undefined>;
}
export const listUpcomingEventsRef: ListUpcomingEventsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUpcomingEventsRef:
```typescript
const name = listUpcomingEventsRef.operationName;
console.log(name);
```

### Variables
The `ListUpcomingEvents` query has no variables.
### Return Type
Recall that executing the `ListUpcomingEvents` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUpcomingEventsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListUpcomingEvents`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUpcomingEvents } from '@dataconnect/generated';


// Call the `listUpcomingEvents()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUpcomingEvents();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUpcomingEvents(dataConnect);

console.log(data.events);

// Or, you can use the `Promise` API.
listUpcomingEvents().then((response) => {
  const data = response.data;
  console.log(data.events);
});
```

### Using `ListUpcomingEvents`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUpcomingEventsRef } from '@dataconnect/generated';


// Call the `listUpcomingEventsRef()` function to get a reference to the query.
const ref = listUpcomingEventsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUpcomingEventsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.events);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.events);
});
```

## GetCurrentUserProfile
You can execute the `GetCurrentUserProfile` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCurrentUserProfile(vars: GetCurrentUserProfileVariables): QueryPromise<GetCurrentUserProfileData, GetCurrentUserProfileVariables>;

interface GetCurrentUserProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCurrentUserProfileVariables): QueryRef<GetCurrentUserProfileData, GetCurrentUserProfileVariables>;
}
export const getCurrentUserProfileRef: GetCurrentUserProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCurrentUserProfile(dc: DataConnect, vars: GetCurrentUserProfileVariables): QueryPromise<GetCurrentUserProfileData, GetCurrentUserProfileVariables>;

interface GetCurrentUserProfileRef {
  ...
  (dc: DataConnect, vars: GetCurrentUserProfileVariables): QueryRef<GetCurrentUserProfileData, GetCurrentUserProfileVariables>;
}
export const getCurrentUserProfileRef: GetCurrentUserProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCurrentUserProfileRef:
```typescript
const name = getCurrentUserProfileRef.operationName;
console.log(name);
```

### Variables
The `GetCurrentUserProfile` query requires an argument of type `GetCurrentUserProfileVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCurrentUserProfileVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetCurrentUserProfile` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCurrentUserProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetCurrentUserProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCurrentUserProfile, GetCurrentUserProfileVariables } from '@dataconnect/generated';

// The `GetCurrentUserProfile` query requires an argument of type `GetCurrentUserProfileVariables`:
const getCurrentUserProfileVars: GetCurrentUserProfileVariables = {
  id: ..., 
};

// Call the `getCurrentUserProfile()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCurrentUserProfile(getCurrentUserProfileVars);
// Variables can be defined inline as well.
const { data } = await getCurrentUserProfile({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCurrentUserProfile(dataConnect, getCurrentUserProfileVars);

console.log(data.user);

// Or, you can use the `Promise` API.
getCurrentUserProfile(getCurrentUserProfileVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetCurrentUserProfile`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCurrentUserProfileRef, GetCurrentUserProfileVariables } from '@dataconnect/generated';

// The `GetCurrentUserProfile` query requires an argument of type `GetCurrentUserProfileVariables`:
const getCurrentUserProfileVars: GetCurrentUserProfileVariables = {
  id: ..., 
};

// Call the `getCurrentUserProfileRef()` function to get a reference to the query.
const ref = getCurrentUserProfileRef(getCurrentUserProfileVars);
// Variables can be defined inline as well.
const ref = getCurrentUserProfileRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCurrentUserProfileRef(dataConnect, getCurrentUserProfileVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewEvent
You can execute the `CreateNewEvent` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewEvent(vars: CreateNewEventVariables): MutationPromise<CreateNewEventData, CreateNewEventVariables>;

interface CreateNewEventRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewEventVariables): MutationRef<CreateNewEventData, CreateNewEventVariables>;
}
export const createNewEventRef: CreateNewEventRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewEvent(dc: DataConnect, vars: CreateNewEventVariables): MutationPromise<CreateNewEventData, CreateNewEventVariables>;

interface CreateNewEventRef {
  ...
  (dc: DataConnect, vars: CreateNewEventVariables): MutationRef<CreateNewEventData, CreateNewEventVariables>;
}
export const createNewEventRef: CreateNewEventRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewEventRef:
```typescript
const name = createNewEventRef.operationName;
console.log(name);
```

### Variables
The `CreateNewEvent` mutation requires an argument of type `CreateNewEventVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewEventVariables {
  title: string;
  description: string;
  location: string;
  startDate: TimestampString;
  endDate: TimestampString;
  rsvpRequired: boolean;
  imageUrl?: string | null;
}
```
### Return Type
Recall that executing the `CreateNewEvent` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewEventData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewEventData {
  event_insert: Event_Key;
}
```
### Using `CreateNewEvent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewEvent, CreateNewEventVariables } from '@dataconnect/generated';

// The `CreateNewEvent` mutation requires an argument of type `CreateNewEventVariables`:
const createNewEventVars: CreateNewEventVariables = {
  title: ..., 
  description: ..., 
  location: ..., 
  startDate: ..., 
  endDate: ..., 
  rsvpRequired: ..., 
  imageUrl: ..., // optional
};

// Call the `createNewEvent()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewEvent(createNewEventVars);
// Variables can be defined inline as well.
const { data } = await createNewEvent({ title: ..., description: ..., location: ..., startDate: ..., endDate: ..., rsvpRequired: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewEvent(dataConnect, createNewEventVars);

console.log(data.event_insert);

// Or, you can use the `Promise` API.
createNewEvent(createNewEventVars).then((response) => {
  const data = response.data;
  console.log(data.event_insert);
});
```

### Using `CreateNewEvent`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewEventRef, CreateNewEventVariables } from '@dataconnect/generated';

// The `CreateNewEvent` mutation requires an argument of type `CreateNewEventVariables`:
const createNewEventVars: CreateNewEventVariables = {
  title: ..., 
  description: ..., 
  location: ..., 
  startDate: ..., 
  endDate: ..., 
  rsvpRequired: ..., 
  imageUrl: ..., // optional
};

// Call the `createNewEventRef()` function to get a reference to the mutation.
const ref = createNewEventRef(createNewEventVars);
// Variables can be defined inline as well.
const ref = createNewEventRef({ title: ..., description: ..., location: ..., startDate: ..., endDate: ..., rsvpRequired: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewEventRef(dataConnect, createNewEventVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.event_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.event_insert);
});
```

## UpdateUserProfile
You can execute the `UpdateUserProfile` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUserProfile(vars: UpdateUserProfileVariables): MutationPromise<UpdateUserProfileData, UpdateUserProfileVariables>;

interface UpdateUserProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserProfileVariables): MutationRef<UpdateUserProfileData, UpdateUserProfileVariables>;
}
export const updateUserProfileRef: UpdateUserProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUserProfile(dc: DataConnect, vars: UpdateUserProfileVariables): MutationPromise<UpdateUserProfileData, UpdateUserProfileVariables>;

interface UpdateUserProfileRef {
  ...
  (dc: DataConnect, vars: UpdateUserProfileVariables): MutationRef<UpdateUserProfileData, UpdateUserProfileVariables>;
}
export const updateUserProfileRef: UpdateUserProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserProfileRef:
```typescript
const name = updateUserProfileRef.operationName;
console.log(name);
```

### Variables
The `UpdateUserProfile` mutation requires an argument of type `UpdateUserProfileVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserProfileVariables {
  id: UUIDString;
  displayName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  photoUrl?: string | null;
  address?: string | null;
}
```
### Return Type
Recall that executing the `UpdateUserProfile` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserProfileData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUserProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUserProfile, UpdateUserProfileVariables } from '@dataconnect/generated';

// The `UpdateUserProfile` mutation requires an argument of type `UpdateUserProfileVariables`:
const updateUserProfileVars: UpdateUserProfileVariables = {
  id: ..., 
  displayName: ..., // optional
  email: ..., // optional
  phoneNumber: ..., // optional
  photoUrl: ..., // optional
  address: ..., // optional
};

// Call the `updateUserProfile()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUserProfile(updateUserProfileVars);
// Variables can be defined inline as well.
const { data } = await updateUserProfile({ id: ..., displayName: ..., email: ..., phoneNumber: ..., photoUrl: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUserProfile(dataConnect, updateUserProfileVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUserProfile(updateUserProfileVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUserProfile`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserProfileRef, UpdateUserProfileVariables } from '@dataconnect/generated';

// The `UpdateUserProfile` mutation requires an argument of type `UpdateUserProfileVariables`:
const updateUserProfileVars: UpdateUserProfileVariables = {
  id: ..., 
  displayName: ..., // optional
  email: ..., // optional
  phoneNumber: ..., // optional
  photoUrl: ..., // optional
  address: ..., // optional
};

// Call the `updateUserProfileRef()` function to get a reference to the mutation.
const ref = updateUserProfileRef(updateUserProfileVars);
// Variables can be defined inline as well.
const ref = updateUserProfileRef({ id: ..., displayName: ..., email: ..., phoneNumber: ..., photoUrl: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserProfileRef(dataConnect, updateUserProfileVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

