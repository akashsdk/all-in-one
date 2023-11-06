import React, { useState } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

import { Button, Tooltip } from "antd";

export default function PercentageCalculator() {
  const [inputValue, setInputValue] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setInputValue(newValue);
  };

  const handlePercentageChange = (e) => {
    const newPercentage = parseFloat(e.target.value);
    setPercentage(newPercentage);
  };

  const calculatePercentage = () => {
    const calculatedResult = (inputValue * percentage) / 100;
    setResult(calculatedResult);
  };
  const clean = () => {
    setInputValue("");
    setPercentage("");
    setResult(0);
  };
  const isButtonDisabled = percentage === "" || inputValue === "";

  const text = <span>please! Enter Value</span>;
  return (
    <div>
      <ComponentCart
        mainText="Percentage Calculator"
        bodyText='Please provide any two values below and click the "Calculate" button
      to get the third value.'
      />
      <div className="ComponentBody">
        <div style={{ height: "20px" }} />
        <div>
          <h1 style={{ color: "rgb(245, 4, 112" }}>Result: {result}</h1>
          <div style={{ marginTop: "50px" }}>
            <label>Enter a value: </label>
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="00"
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Enter percentage: </label>
            <input
              type="number"
              value={percentage}
              onChange={handlePercentageChange}
              placeholder="%"
            />
          </div>
          <div>
            <Tooltip placement="topLeft" title={isButtonDisabled ? text : ""}>
              <Button
                style={{
                  marginTop: "30px",
                  marginBottom: "50px",
                }}
                onClick={calculatePercentage}
                type="primary"
                disabled={isButtonDisabled}
              >
                Calculate
              </Button>
            </Tooltip>

            <Button
              style={{
                marginTop: "30px",
                marginBottom: "50px",
                marginLeft: "20px",
              }}
              onClick={clean}
              type="dashed"
              danger
            >
              Clean
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
