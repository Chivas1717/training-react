import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++;
      console.log(state.count);
    },

    decrement(state) {
      state.count--;
      console.log(state.count);
    },
  },
});

export const selectCounter = (state) => state.counter;

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
