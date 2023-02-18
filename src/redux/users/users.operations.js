import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const usersAPI = axios.create({
  baseURL: 'https://63f0f0205703e063fa4f4924.mockapi.io',
});

export const fetchUsers = createAsyncThunk('users/get', async (_, thunkAPI) => {
  try {
    const { data } = await usersAPI.get('/users');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchUserDetails = createAsyncThunk(
  'user/details',
  async (id, thunkAPI) => {
    try {
      const { data } = await usersAPI.get(`/users/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'user/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await usersAPI.delete(`/users/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
