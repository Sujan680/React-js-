import React, { useRef } from 'react'

const Example = () => {

    const inputRef = useRef(null);
    console.log(inputRef);
    

    const handleFocus = () => {
        inputRef.current.focus(); // focus the input field
        inputRef.current.value = 'sujan';
    }

  return (
    <div>
        <input type="text" ref={inputRef} placeholder='Enter text' />
        <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

export default Example;

// useRef hook: 
// It is a built-in react hook that provides a way to interact with and manage
// mutable references or DOM elements without triggering re-renders.

// It is often used for direclty accessing DOM nodes without causing the components to re-render.

// const ref = useRef(initialValue);

// SUMMARY of useRef() hook:

// Direct DOM manipulation
// Storing mutable data that doesn't need to trigger re-renders
// Persistent values (e.g., timers, previous state)
