import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    { id: 1, title: 'JS', body: 'Description' },
    { id: 2, title: 'TS', body: 'Description' },
    { id: 3, title: 'PYTHON', body: 'Description' },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
    },

    removePost(state, action) {
      console.log('work');
      state.posts = state.posts.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const selectTodo = (state) => state.todo;

export const { addPost, removePost } = todoSlice.actions;

export default todoSlice.reducer;
