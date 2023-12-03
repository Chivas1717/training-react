import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodo } from '../redux/slices/todoSlice';
import PostItem from './PostItem';

const PostList = function ({ title }) {
  const { posts } = useSelector(selectTodo);
  // console.log(posts);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
