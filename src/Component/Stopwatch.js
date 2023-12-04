import React, { useState, useEffect } from 'react';
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

export default function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000); // Update every 1 second (1000 milliseconds)
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimer(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <ComponentCart mainText="Stopwatch" bodyText="Stopwatch" />
      <div className="ComponentBody">
      <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="timer">{formatTime(timer)}</div>
      <div className="controls">
        <button className='stop-controls-button' onClick={handleStart}>Start</button>
        <button className='stop-controls-button' onClick={handleStop}>Stop</button>
        <button className='stop-controls-button' onClick={handleReset}>Reset</button>
      </div>
    </div>
      </div>
    </div>
  );
}
