import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isMobMenu: false,
  },

  reducers: {
    toggleMobMenu(state) {
      state.isMobMenu = !state.isMobMenu;
    },
  },
});

export const { toggleMobMenu } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
