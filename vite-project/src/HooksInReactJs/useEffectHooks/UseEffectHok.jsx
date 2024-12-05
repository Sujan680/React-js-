import React, { useEffect, useState } from "react";

const UseEffectHok = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 0) {
      console.log("useEffect Hooks");
      document.title = `Increment ${value}`;
    }
  }, [value]); // when empty [] dependencies it will render only once
  // but when [value] it will render every time the state changes
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>CLick</button>
    </div>
  );
};

export default UseEffectHok;
