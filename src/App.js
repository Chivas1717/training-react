import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React, { useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton.jsx";
import MyInput from "./components/UI/input/MyInput";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import "./styles/App.css";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "Description" },
    { id: 2, title: "JS", body: "Description" },
    { id: 3, title: "JS", body: "Descri ption" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="almapma" />
    </div>
  );
}

export default App;
