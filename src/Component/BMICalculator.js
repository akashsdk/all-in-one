import React, { useState } from "react";
import "./Component.css";

import ComponentCart from "../Cart/ComponentCart";
import { Radio, Progress } from "antd";

export default function BMICalculator() {
  const [feet, setFeet] = useState();
  const [inches, setInches] = useState();
  const [weight, setWeight] = useState(0);
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

  return (
    <div>
      <ComponentCart
        mainText=" BMI Calculator"
        bodyText='Click the "Calculate" button to get the third value.'
      />
      <div className="ComponentBody">
        <div>
          <h1>BMI Calculator</h1>
          <div>
            <label>Enter your weight (kg): </label>
            <input type="number" value={weight} onChange={handleWeightChange} />
          </div>
          <div>
            <label>Enter your height: </label>
            <input
              type="number"
              value={feet}
              placeholder="Feet"
              onChange={handleFeetChange}
            />
            <input
              type="number"
              value={inches}
              placeholder="Inches"
              onChange={handleInchesChange}
            />
          </div>
          <div>
            <label>Gender: </label>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Male</Radio>
              <Radio value={2}>Female</Radio>
            </Radio.Group>
          </div>

          <button onClick={calculateBMI}>Calculate BMI</button>
          <div>
            <p>Your BMI is: {bmi.toFixed(2)}</p>
          </div>
        </div>
        <Progress
          type="dashboard"
          percent={bmi.toFixed(2)}
          strokeColor={twoColors}
        />
      </div>
    </div>
  );
}
