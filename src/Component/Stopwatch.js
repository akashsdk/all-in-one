import React, { useState, useEffect } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

export default function Stopwatch() {
  // const [timer, setTimer] = useState(0);
  // const [isRunning, setIsRunning] = useState(false);

  // useEffect(() => {
  //   let intervalId;

  //   if (isRunning) {
  //     intervalId = setInterval(() => {
  //       setTimer((prevTimer) => prevTimer + 1);
  //     }, 1000); // Update every 1 second (1000 milliseconds)
  //   } else {
  //     clearInterval(intervalId);
  //   }

  //   return () => clearInterval(intervalId);
  // }, [isRunning]);

  // const handleStart = () => {
  //   setIsRunning(true);
  // };

  // const handleStop = () => {
  //   setIsRunning(false);
  // };

  // const handleReset = () => {
  //   setTimer(0);
  //   setIsRunning(false);
  // };

  // const formatTime = (time) => {
  //   const minutes = Math.floor(time / 60);
  //   const seconds = time % 60;
  //   const milliseconds = time % 100;
  //   return `${minutes < 10 ? "0" : ""}${minutes}:${
  //     seconds < 10 ? "0" : ""}${seconds}:${
  //       milliseconds < 10 ? "0" : ""
  //   }${milliseconds}`;
  // };

  // const formatTime = (time) => {
  //   const hours = Math.floor(time / 3600000); // 1 hour = 3600000 milliseconds
  //   const minutes = Math.floor((time % 3600000) / 60000); // 1 minute = 60000 milliseconds
  //   const seconds = Math.floor((time % 60000) / 1000); // 1 second = 1000 milliseconds
  //   const milliseconds = (time % 1000).toString().slice(0, 2); // Get first 2 digits of milliseconds

  //   return `${hours < 10 ? "0" : ""}${hours}:${
  //     minutes < 10 ? "0" : ""
  //   }${minutes}:${seconds < 10 ? "0" : ""}${seconds}.${milliseconds}`;
  // };







  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };

  return (
    <div>
      <ComponentCart mainText="Stopwatch" bodyText="Stopwatch" />
      <div className="ComponentBody">
        <div className="stopwatch-Body">
          <div style={{ height: "20px" }} />




          <div className="stopwatch-container">
      <p className="stopwatch-timer">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="stopwatch-buttons">
        <button className="stop-controls-button" onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stop-controls-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>






          <div style={{ height: "50px" }} />
        </div>
      </div>
    </div>
  );
}
