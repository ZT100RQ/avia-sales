import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cheap: true,
  fast: false,
  optimal: false,
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    cheap: (state) => {
      console.log('cheap', state);
    },
    fast: (state) => {
      console.log('fast', state);
    },
    optimal: (state) => {
      console.log('optimal', state);
    },
  },
});

export const { cheap, fast, optimal } = ticketsSlice.actions;

export default ticketsSlice.reducer;
