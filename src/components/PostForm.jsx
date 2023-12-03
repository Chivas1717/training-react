import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import { addPost } from '../redux/slices/todoSlice';
import { useDispatch } from 'react-redux';

const PostForm = () => {
  const [post, setPost] = useState({ title: '', body: '' });
  // console.log('render');
  const dispatch = useDispatch();
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    dispatch(addPost(newPost));
    setPost({ title: '', body: '' });
  };

  return (
    <div>
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Add new post</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
