import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cheap: true,
  fast: false,
  optimal: false,
};

export const tabs = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setCheap: (state) => {
      state.cheap = true;
      state.fast = false;
      state.optimal = false;
    },
    setFast: (state) => {
      state.cheap = false;
      state.fast = true;
      state.optimal = false;
    },
    setOptimal: (state) => {
      state.cheap = false;
      state.fast = false;
      state.optimal = true;
    },
  },
});

export const { setCheap, setFast, setOptimal } = tabs.actions;

export default tabs.reducer;
