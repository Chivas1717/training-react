import React from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../redux/slices/todoSlice';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {props.number} {props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="buttons">
          <MyButton onClick={() => dispatch(removePost(props.post.id))}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
