import React, { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0); 
  const [remainingTime, setRemainingTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null); 

  useEffect(() => {
    const savedTime = localStorage.getItem('remainingTime');
    if (savedTime) {
      setRemainingTime(parseInt(savedTime, 10));
      setIsRunning(true);
    }

    return () => clearInterval(intervalId);
  }, [intervalId]);

  useEffect(() => {
    if (isRunning && remainingTime > 0) {
      const id = setInterval(() => {
        setRemainingTime(prevTime => {
          const newTime = prevTime - 1;
          localStorage.setItem('remainingTime', newTime);
          return newTime;
        });
      }, 1000);
      setIntervalId(id);
    } else if (remainingTime <= 0) {
      clearInterval(intervalId);
      localStorage.removeItem('remainingTime');
    }
    return () => clearInterval(intervalId);
  }, [isRunning, remainingTime]);

  const handleStart = () => {
    setRemainingTime(time);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalId);
  };

  const handleReset = () => {
    setRemainingTime(time);
    clearInterval(intervalId);
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

