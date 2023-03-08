import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { fetchAll, addItem, deleteItem } from 'shared/services/api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await fetchAll();
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Missing header with authorization token.');
      } else if (error.response.status === 404) {
        toast.error('There is no such user collection.');
      } else if (error.response.status === 500) {
        toast.error('Server error.');
      } else {
        toast.error(error.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const data = await addItem(contact);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('Error creating contact.');
      } else if (error.response.status === 401) {
        toast.error('Missing header with authorization token.');
      } else {
        toast.error(error.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const data = await deleteItem(id);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Missing header with authorization token.');
      } else if (error.response.status === 404) {
        toast.error('There is no such user collection.');
      } else if (error.response.status === 500) {
        toast.error('Server error.');
      } else {
        toast.error(error.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
