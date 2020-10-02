import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: "idle",
    authError: null,
  },
  reducers: {
    processStarted: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
      state.authError = null;
    },
    processCompleted: (state, action) => {
      if (state.loading === "pending") {
        // Receive token from action.payload and put on a state property called token
        state.loading = "idle";
      }
      state.authError = null;
    },
    processFailed: (state, action) => {
      if (state.loading === "pending") {
        // Receive error msg from action.payload and put on a state property called errorMessage
        state.loading = "idle";
      }
      state.authError = "Error: " + action.payload;
    },
  },
  extraReducers: {},
});

export const signIn = (credentials, { firebase, firestore }) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(processStarted());
    await firebase.login(credentials); // RRF'S Ehanced function
    // await firebase
    //   .auth()
    //   .signInWithEmailAndPassword(credentials.email, credentials.password);
    // await firebase.authWithPassword(credentials);
    dispatch(processCompleted());
  } catch (error) {
    const errorMsg = error.message;
    const [methodError, shortMsg] = errorMsg.split(":");
    dispatch(processFailed(shortMsg));
  }
};

export const signUp = (credentials, profile, { firebase, firestore }) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(processStarted());
    // USE RRF'S createUser(cred,profileData). cred = email & pass to create a firebase acct while profileData should include other
    // data to be set in the user's doc in the users collection (Country, ProfileImage, Phone number etc)
    // await firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(credentials.email, credentials.password);
    // dispatch(processCompleted());
    // if rrf can't auto create a user doc, pass on the current user's id at point of dispatch and use it to create a doc in the users collection
    // after createUser have completed successfully. i.e stack await firebase.createUser(), then await firestore.add(). since we're awaiting the first,
    // the second won't execute until the first goes through
    await firebase.createUser(credentials, profile);
    dispatch(processCompleted());
  } catch (error) {
    const errorMsg = error.message;
    const errorMsgShort = errorMsg.split(":");
    dispatch(processFailed(errorMsgShort));
  }
};

//TODO: Unable to access getFirebase and thus cannot connect to firebase. FIX IT !

export const {
  processFailed,
  processCompleted,
  processStarted,
} = authSlice.actions;
export default authSlice.reducer;
