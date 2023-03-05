import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAll, deleteItem, addItem } from 'shared/services/api/mockapi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await fetchAll();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const res = await addItem(contact);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const res = await deleteItem(id);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
