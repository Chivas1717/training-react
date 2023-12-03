import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/counterSlice';
import todo from './slices/todoSlice';

export const store = configureStore({
  reducer: {
    counter,
    todo,
  },
});
