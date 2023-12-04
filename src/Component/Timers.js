import React, { useState, useEffect } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";
import { Button } from "antd";

export default function Timers() {


  const [time, setTime] = useState(600); // Initial time in seconds (e.g., 10 minutes = 600 seconds)
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000); // Update every 1 second (1000 milliseconds)
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <ComponentCart
        mainText="Timers"
        bodyText="Timers..."
      />
      <div className="ComponentBody">
      <div>
      <h1>Countdown Timer</h1>
      <div>
        <p>Time remaining: {formatTime(time)}</p>
      </div>
      <div>
        <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={() => setTime(600)}>Reset</button> {/* Reset time to initial value */}
      </div>
    </div>
      </div>
    </div>
  )
}
