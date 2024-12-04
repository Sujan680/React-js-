import React, { useState } from "react";
// Use the lazy initializer (useState(() => {...})) when:

// The state initialization involves a computation (like generating a random number).
// You want to avoid unnecessary re-computation on every render.

const ExampleTwo = () => {
  const [randomNumber, setRandomNumber] = useState(() => {
    Math.round(Math.random() * 100);
  });

  const handleRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };
  return (
    <div>
      <h1> Random Number: {randomNumber} </h1>
      <button onClick={handleRandomNumber}>Generate Random Number</button>
    </div>
  );
};

export default ExampleTwo;
