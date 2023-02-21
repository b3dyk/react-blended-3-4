import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './global/global.slice';
import { usersReducer } from './users/users.slice';

export const store = configureStore({
  devTools: true,
  reducer: {
    users: usersReducer,
    global: globalReducer,
  },
});
