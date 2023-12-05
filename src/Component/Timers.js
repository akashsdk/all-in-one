import React, { useState, useEffect } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";
import { Button, Input, Progress } from "antd";
import ClockCircleOutlined from "@ant-design/icons/ClockCircleOutlined";

export default function Timers() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleInput1Change = (e) => {
    setHours(e.target.value);
  };

  const handleInput2Change = (e) => {
    setMinutes(e.target.value);
  };

  const handleInput3Change = (e) => {
    setSeconds(e.target.value);
  };

  useEffect(() => {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let intervalId;

    if (isActive && totalSeconds > 0) {
      intervalId = setInterval(() => {
        totalSeconds--;
        if (totalSeconds <= 0) {
          clearInterval(intervalId);
        }
        setHours(Math.floor(totalSeconds / 3600));
        setMinutes(Math.floor((totalSeconds % 3600) / 60));
        setSeconds(totalSeconds % 60);
      }, 1000); // Update every 1 second (1000 milliseconds)
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive, hours, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const reset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsActive(false);
  };

  const twoColors = {
    "0%": "red",
    "50%": "#ffd000",
    "100%": "green",
  };

  













  const [percentage, setPercentage] = useState(100);
  const [timer, setTimer] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
        setPercentage((prevPercentage) => prevPercentage - (1 / 100));
      } else {
        clearInterval(interval);
      }
    }, 1000); // Decrease every 1 second (1000 milliseconds)

    return () => clearInterval(interval);
  }, [timer]);


  return (
    <div>
      <ComponentCart mainText="Countdown Timer" bodyText="Timers..." />
      <div className="ComponentBody">
        <div>
          <div style={{ height: "20px" }} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p className="timers-text"> Hours: </p>
            <Input
              status="error"
              className="timers-input"
              prefix={<ClockCircleOutlined />}
              value={hours}
              onChange={handleInput1Change}
            />

            <p className="timers-text-2"> Minutes: </p>
            <Input
              status="error"
              className="timers-input"
              prefix={<ClockCircleOutlined />}
              value={minutes}
              onChange={handleInput2Change}
            />

            <p className="timers-text-2"> Seconds: </p>
            <Input
              status="error"
              className="timers-input"
              prefix={<ClockCircleOutlined />}
              value={seconds}
              onChange={handleInput3Change}
            />
          </div>
          <div>
            <p className="stopwatch-timer-1">Time remaining:</p>
            <p className="stopwatch-timer">
              {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
            </p>

            {isActive && (hours !== 0 || minutes !== 0 || seconds !== 0) ? (
              <p> working...</p>
            ) : (
              <p>Set new value</p>
            )}
          </div>
          <div>
            <Button
              onClick={toggleTimer}
              size="large"
              type={isActive ? "dashed" : "primary"}
              style={{
                color: isActive ? "red" : "",
                borderColor: isActive ? "red" : "",
                marginRight: "30px",
              }}
            >
              {" "}
              {isActive ? "Stop" : "Start"}{" "}
            </Button>
            <Button onClick={reset} size="large" type="primary" danger>
              Reset
            </Button>
          </div>
        </div>
        <Progress
          percent={99.9}
          strokeColor={twoColors}
          style={{ width: "300px" }}
        />







<div>
        <p>Timer: {timer}s</p>
        <p>Percentage: {percentage.toFixed(2)}%</p>
      </div>
        <div style={{ height: "50px" }} />
      </div>
    </div>
  );
}
