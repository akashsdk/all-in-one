import React, { useState, useEffect } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";
import { Button, InputNumber } from "antd";
import ClockCircleOutlined from "@ant-design/icons/ClockCircleOutlined";

export default function Timers() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
    setIsActive(!isActive);
  };
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
            <InputNumber
              status="error"
              className="timers-input"
              prefix={<ClockCircleOutlined />}
              
            />
            <input
              type="number"
              placeholder="Hours"
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
            />
            <input
              type="number"
              placeholder="Minutes"
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <input
              type="number"
              placeholder="Seconds"
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
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

        <div style={{ height: "50px" }} />
      </div>
    </div>
  );
}
