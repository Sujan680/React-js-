import React, { useEffect, useRef, useState } from 'react';

const Timer = () => {
  const timerId = useRef(null); // Reference for the timer
  const [count, setCount] = useState(0); // Timer counter
  const [isRunning, setIsRunning] = useState(false); // State to track timer status

  const startTimer = () => {
    if (!isRunning) { // Prevent multiple timers
      setIsRunning(true);
      timerId.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerId.current); // Clear the timer
    setIsRunning(false);
  };

  useEffect(() => {
    // Cleanup the timer on component unmount
    return () => clearInterval(timerId.current);
  }, []);

  return (
    <div>
      <h1>Timer: {count} seconds</h1>
      <button onClick={startTimer} disabled={isRunning}>Start Timer</button>
      <button onClick={stopTimer} disabled={!isRunning}>Stop Timer</button>
    </div>
  );
};

export default Timer;
