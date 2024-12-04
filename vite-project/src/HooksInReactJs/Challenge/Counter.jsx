import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => {
    const initialState = 0;
    return initialState;
  });

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h2> {count} </h2>
      <button style={{
        borderRadius:'10px',
        padding: '10px',
        marginBottom: '4px',
        backgroundColor:'pink'
      }} onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
