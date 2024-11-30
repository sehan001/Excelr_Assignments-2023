import React, { useState, useEffect } from "react";

const FunctionalLifecycleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component did mount (functional component)");
    return () => {
      console.log("Component will unmount (functional component)");
    };
  }, []);

  useEffect(() => {
    console.log("Count state updated (functional component)");
  }, [count]);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log("Render executed (functional component)");

  return (
    <div>
      <h2>Functional Component with useEffect Hook</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default FunctionalLifecycleComponent;
