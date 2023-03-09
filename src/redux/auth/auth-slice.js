import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  authLogIn,
  authSignUp,
  authLogOut,
  authRefreshUser,
} from './auth-operations';

const actions = [authLogIn, authSignUp, authLogOut, authRefreshUser];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(authSignUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLogIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLogOut.fulfilled, _ => initialState)
      .addCase(authRefreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

const persistedReducer = persistReducer(authPersistConfig, authSlice.reducer);

export default persistedReducer;
