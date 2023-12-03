import React from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Counter from './components/Counter';
import './styles/App.css';
import NewCounter from "./components/NewCounter.tsx";
function App() {
  return (
    <div className="App">
      <PostForm />
      <PostList title="To do list" />
      <Counter />
      <NewCounter />
      {/*<Timer />*/}
    </div>
  );
}

export default App;
