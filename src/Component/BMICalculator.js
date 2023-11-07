import React, { useState } from "react";
import "./Component.css";

import ComponentCart from "../Cart/ComponentCart";
import { Radio, Progress, Tooltip, Button } from "antd";

export default function BMICalculator() {
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(0);

  const handleFeetChange = (e) => {
    const newFeet = parseFloat(e.target.value);
    setFeet(newFeet);
  };

  const handleInchesChange = (e) => {
    const newInches = parseFloat(e.target.value);
    setInches(newInches);
  };

  const handleWeightChange = (e) => {
    const newWeight = parseFloat(e.target.value);
    setWeight(newWeight);
  };

  const calculateBMI = () => {
    const totalInches = feet * 12 + inches;
    const centimetersValue = totalInches * 2.54;

    const heightInMeters = centimetersValue / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBMI(calculatedBMI);
  };
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const twoColors = {
    "0%": "#108ee9",
    "100%": "rgb(255, 0, 0)",
  };

  const clean = () => {
    setFeet("");
    setInches("");
    setWeight("");
    setBMI(0);
  };
  const isButtonDisabled1 =
    setFeet === "" || setInches === "" || setWeight === "";

  const text = <span>please! Enter Value</span>;
  return (
    <div>
      <ComponentCart
        mainText=" BMI Calculator"
        bodyText='Click the "Calculate" button to get the third value.'
      />
      <div className="ComponentBody">
        <div style={{ height: "20px" }} />
        <div>
          <h1 style={{ color: "rgb(245, 4, 112" }}>Result: {bmi.toFixed(2)}</h1>
          <div style={{ marginTop: "50px" }}>
            <label>Enter your weight (kg): </label>
            <input
              type="number"
              value={weight}
              onChange={handleWeightChange}
              placeholder="00"
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Enter your height: </label>
          </div>
          <div style={{ marginTop: "10px" }}>
            <input
              type="number"
              value={feet}
              placeholder="Feet"
              onChange={handleFeetChange}
            />
            <input
            style={{ marginLeft: "10px" }}
              type="number"
              value={inches}
              placeholder="Inches"
              onChange={handleInchesChange}
            />
            </div>
          <div style={{ marginTop: "10px" }}>
            <label>Gender: </label>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Male</Radio>
              <Radio value={2}>Female</Radio>
            </Radio.Group>
          </div>
          <div>
            <Tooltip placement="topLeft" title={isButtonDisabled1 ? text : ""}>
              <Button
                style={{
                  marginTop: "30px",
                  marginBottom: "50px",
                }}
                onClick={calculateBMI}
                type="primary"
                disabled={isButtonDisabled1}
              >
                Calculate BMI
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
        <Progress
          type="dashboard"
          percent={bmi.toFixed(2)}
          strokeColor={twoColors}
        />

        <div>
          <h3>Note:</h3>
          <p>0-18.5 is' Underweight'</p>
          <p>18.5-25 is 'Normal'</p>
          <p>25-30 is 'Overweight'</p>
          <p>30-35 is 'Obese Class I'</p>
          <p>35-00 is 'Obese Class II'</p>
          <p> 40{'<'} is 'Obese Class III'</p>
        </div>
        <div style={{ height: "20px" }} />
      </div>
    </div>
  );
}
