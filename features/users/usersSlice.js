import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    postAdded: (state, { payload }) => {
      state[payload.userId].push(payload.text);
    },
    postDeleted: (state, { payload }) => {},
    postUpdated: (state, { payload }) => {},
    postApproved: (state, { payload }) => {},
    postRejected: (state, { payload }) => {},
  },
  extraReducers: {},
});

/*
This slice should contain actions that'll process all notifications for a user in its regular actions. Main activities/action types:
- Post related.
- Status related.
- groups related : like joining a group, leaving a group
- User-User related (interracting with other users); like stalking, being stalked
- Own account activities; deleting own account

Usershsould be able to do the following:
- View public posts.
- Join groups pending approval.
- Submit posts pending approval
- Submit comment pending approval
- View settings

except they are banned, unverified
Retrieve their profile data and other data they are allowed to view from the ui component using redux-firestore
*/
