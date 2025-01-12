import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [time, setTime] = useState(0); // initial time set by the user
  const [remainingTime, setRemainingTime] = useState(0); // countdown time
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const savedTime = localStorage.getItem('remainingTime');
    if (savedTime) {
      setRemainingTime(parseInt(savedTime, 10));
      setIsRunning(true);
    }

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (isRunning && remainingTime > 0) {
      timerRef.current = setInterval(() => {
        setRemainingTime(prevTime => {
          const newTime = prevTime - 1;
          localStorage.setItem('remainingTime', newTime);
          return newTime;
        });
      }, 1000);
    } else if (remainingTime <= 0) {
      clearInterval(timerRef.current);
      localStorage.removeItem('remainingTime');
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, remainingTime]);

  const handleStart = () => {
    setRemainingTime(time);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setRemainingTime(time);
    clearInterval(timerRef.current);
    localStorage.removeItem('remainingTime');
  };

  return (
    <div>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(parseInt(e.target.value, 10))}
        placeholder="Enter time in seconds"
        disabled={isRunning}
      />
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <button onClick={handleStop} disabled={!isRunning}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <p>{remainingTime > 0 ? remainingTime : "Time's up!"}</p>
    </div>
  );
};

export default App;
