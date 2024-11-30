import React from "react";
import "./App.css";
import LifecycleComponent from "./LifecycleComponent";
import FunctionalLifecycleComponent from "./FunctionalLifecycleComponent";

function App() {
  return (
    <div className="App">
      <h1>React Lifecycle Hooks Demo</h1>
      <hr />
      <LifecycleComponent />
      <hr />
      <FunctionalLifecycleComponent />
    </div>
  );
}

export default App;
