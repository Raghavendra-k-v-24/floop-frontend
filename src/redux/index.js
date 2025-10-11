import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState: {
    data: "",
  },
  reducers: {
    setLoggedInUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

const signupFormData = createSlice({
  name: "signupFormData",
  initialState: {
    name: "",
    email: "",
    password: "",
    role: "",
    portfolioLink: "",
    revieweeName: "",
    revieweeEmail: "",
    reviewerName: "",
    reviewerEmail: "",
    goals: "",
    emailInvites: "",
    accessType: "view",
    reviewLink: "",
  },
  reducers: {
    setSignUpFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

const rootReducer = combineReducers({
  loggedInUser: loggedInUserSlice.reducer,
  signupFormData: signupFormData.reducer,
});

const rootReducerWithReset = (state, action) => {
  if (action.type === "RESET_APP") {
    storage.removeItem("persist:root");
    state = undefined;
  }
  return rootReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducerWithReset);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export const LoggedInUser = loggedInUserSlice.actions;
export const SignUpFormData = signupFormData.actions;

export const resetApp = () => ({ type: "RESET_APP" });

export { persistor };
export default store;
