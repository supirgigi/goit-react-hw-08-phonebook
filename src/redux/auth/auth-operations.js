import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  setAuthHeader,
  clearAuthHeader,
  signUp,
  logIn,
  logOut,
  getCurrentUser,
} from 'shared/services/api/auth';

export const authSignUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const data = await signUp(credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('User creation error.');
      } else if (error.response.status === 500) {
        toast.error('Server error.');
      } else {
        toast.error(error.message);
      }
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const authLogIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const data = await logIn(credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('Login error.');
      } else {
        toast.error(error.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authLogOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await logOut();
      clearAuthHeader();
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Missing header with authorization token.');
      } else if (error.response.status === 500) {
        toast.error('Server error.');
      } else {
        toast.error(error.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authRefreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { token } = state.auth;

    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to get user');
    }

    try {
      setAuthHeader(token);
      const data = await getCurrentUser();
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Missing header with authorization token.');
      } else {
        toast.error(error.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
