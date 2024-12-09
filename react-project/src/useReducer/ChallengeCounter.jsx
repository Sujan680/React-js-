import React, { useReducer, useState } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
      break;
    case "decrement":
      return { count: state.count - 1 };
      break;
    case "incrementByAmount":
      return { count: state.count + action.payload };
      break;
    case "decrementByAmount":
      return { count: state.count - action.payload };
      break;

    default:
      state;
  }
};

const ChallengeCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrementByAmount = () => {
    dispatch({type: 'incrementByAmount', payload: Number(inputValue)})
    setInputValue(0);
  }
  const handleDecrementByAmount = () => {
    dispatch({type: 'decrementByAmount', payload: Number(inputValue)})
    setInputValue(0);
  }

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter the number"
        />

        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>
      <hr />
    </div>
  );
};

export default ChallengeCounter;
