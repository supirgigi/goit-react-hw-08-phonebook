import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const actions = [fetchContacts, addContact, deleteContact];

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default contactsSlice.reducer;
