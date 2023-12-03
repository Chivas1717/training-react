import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectCounter } from '../redux/slices/counterSlice';

const Counter = function () {
  // const [value, setValue] = useState('some message');
  const { count } = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* <h1>{value}</h1>
      <p>
        <input 
          value={value}
          type="text"
          // type="hidden"
          onChange={event => setValue(event.target.value)}/>
      </p> */}
    </div>
  );
};
export default Counter;
