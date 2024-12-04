import React, { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        margin: "20px",
        padding: "20px",
        gap: "10px",
        fontSize: "16px",
      }}
    >
      <button
        style={{
          borderRadius: "10px",
          backgroundColor: "darkorchid",
          padding: "10px",
          color: "white",
        }}
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <p style={{fontSize:'30px'}}>{counter}</p>
      <button
        style={{
          borderRadius: "10px",
          backgroundColor: "darkorchid",
          padding: "10px",
          color: "white",
        }}
        onClick={() => setCounter(counter - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default UseState;
