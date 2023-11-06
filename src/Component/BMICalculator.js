import React, { useState } from "react";
import './Component.css';

import ComponentCart from "../Cart/ComponentCart";

export default function BMICalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(0);

  const handleWeightChange = (e) => {
    const newWeight = parseFloat(e.target.value);
    setWeight(newWeight);
  };

  const handleHeightChange = (e) => {
    const newHeight = parseFloat(e.target.value);
    setHeight(newHeight);
  };

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBMI(calculatedBMI);
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
        <label>Enter your height (cm): </label>
        <input type="number" value={height} onChange={handleHeightChange} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      <div>
        <p>Your BMI is: {bmi.toFixed(2)}</p>
      </div>
    </div>
      </div>
    </div>
  );
}
