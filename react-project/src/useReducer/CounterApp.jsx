import React, { useReducer } from "react";

const initialState = { count: 0 }; // since state is represented as object

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

      break;
    case "decrement":
      return { ...state, count: state.count - 1 };

      break;
    case "reset":
      return { ...state, count: 0 };

    default:
      return state;
  }
};

const CounterApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <hr />
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <hr />
    </div>
  );
};

export default CounterApp;


// useReducer HOOk: Notes 


// useReducer is a React hook that provides a more structured way to manage
//  complex state logic in a component. It's an alternative to useState 
// and is particularly useful when state updates depend on previous state
//  or involve multiple sub-values.

// 1. reducer function:
    // takes the state(current state) and action, return next new state 
// 2. State and dispatch:
    // State: represents the current state value.
    // dispatch: a function used to send action to the reducer

// const [state, dispatch] = useReducer(reducer, initialState);

// reducer: The function that determines how the state should be updated.
// initialState: The initial value of the state.
// state: The current state.
// dispatch: A function to trigger state changes.