// useRef can store data that changes but doesn’t require a re-render (unlike useState).

import React, { useRef, useState } from "react";

const Counter = () => {
  const [renderCount, setRenderCount] = useState(0);
  const counterRef = useRef(0);

  const increment = () => {
    counterRef.current += 1; // // Updates countRef without triggering re-render
    console.log("Count:", counterRef.current);
  };

  return (
    <div>
      <h2>Render Count: {renderCount}</h2>
      <button onClick={() => setRenderCount((prev) => prev + 1)}>
        Re-Render
      </button>
      
      <button onClick={increment}>Increment Count</button>
    </div>
  );
};

export default Counter;
