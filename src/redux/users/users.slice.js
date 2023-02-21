import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  addUser,
  deleteUser,
  editUser,
  fetchUserDetails,
  fetchUsers,
} from './users.operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentUser: null,
  },

  extraReducers: builder =>
    builder

      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.currentUser = null;
      })

      .addCase(fetchUserDetails.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(user => user.id !== payload.id);
        state.currentUser = null;
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.currentUser = payload;
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        const idx = state.items.findIndex(user => user.id === payload.id);
        state.items[idx] = payload;
        state.currentUser = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchUsers.pending,
          addUser.pending,
          deleteUser.pending,
          editUser.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchUsers.rejected,
          addUser.rejected,
          deleteUser.rejected,
          editUser.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
          state.currentUser = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchUsers.fulfilled,
          addUser.fulfilled,
          deleteUser.fulfilled,
          editUser.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const usersReducer = usersSlice.reducer;
