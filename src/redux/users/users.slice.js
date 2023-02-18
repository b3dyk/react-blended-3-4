import { createSlice } from '@reduxjs/toolkit';
import { deleteUser, fetchUserDetails, fetchUsers } from './users.operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentUser: null,
  },

  reducers: {},

  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.error = null;
        state.currentUser = null;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchUserDetails.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUserDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.currentUser = payload;
      })
      .addCase(fetchUserDetails.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(user => user.id !== payload.id);
        state.currentUser = null;
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export const usersReducer = usersSlice.reducer;
