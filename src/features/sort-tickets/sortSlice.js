import { createSlice } from '@reduxjs/toolkit';

function setFilter(state, target, other) {
  if (state.all) {
    state.all = false;
    state[target] = false;
    return;
  }
  if (!state.all && state[other[0]] && state[other[1]] && state[other[2]] && !state[target]) {
    state.all = true;
    state[target] = true;
    return;
  }
  state[target] = !state[target];
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    all: false,
    one: false,
    two: false,
    three: false,
    zero: false,
  },
  reducers: {
    setAll: (state) => {
      state.all = !state.all;
      if (state.all) {
        for (const key in state) {
          state[key] = true;
        }
        return;
      }
      for (const key in state) {
        state[key] = false;
      }
    },
    setZero: (state) => {
      setFilter(state, 'zero', ['one', 'two', 'three']);
    },
    setOne: (state) => {
      setFilter(state, 'one', ['zero', 'two', 'three']);
    },
    setTwo: (state) => {
      setFilter(state, 'two', ['zero', 'one', 'three']);
    },
    setThree: (state) => {
      setFilter(state, 'three', ['zero', 'two', 'one']);
    },
  },
});

export const { setAll, setZero, setOne, setTwo, setThree } = sortSlice.actions;

export default sortSlice.reducer;
