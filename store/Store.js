import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  getFirestore,
  firestoreReducer,
  constants as rfConstants,
} from "redux-firestore";
import {
  getFirebase,
  firebaseReducer,
  actionTypes as rrfActionTypes,
} from "react-redux-firebase";
import auth from "../features/auth/authSlice";

const reducer = {
  auth,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
};
const extraArgument = {
  getFirebase,
  getFirestore,
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        // just ignore these
        ...Object.keys(rfConstants.actionTypes).map(
          (type) => `${rfConstants.actionsPrefix}/${type}`
        ),
        ...Object.keys(rrfActionTypes).map(
          (type) => `@@reactReduxFirebase/${type}`
        ),
      ],
      ignoredPaths: ["auth", "firebase", "firestore"],
    },
    thunk: {
      extraArgument,
    },
  }),
];

const preLoadedState = {};
const Store = configureStore({
  reducer,
  middleware,
  devTools: true,
  preLoadedState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

export default Store;
