// src/App.js
import React from "react";
import "./App.css";
import PostWithAxios from "./PostWithAxios";
import PostWithFetch from "./PostWithFetch";

function App() {
  return (
    <div className="App">
      <PostWithAxios />
      <hr />
      <PostWithFetch />
    </div>
  );
}

export default App;
