import React from "react";
import './Component.css';

import ComponentCart from "../Cart/ComponentCart";

export default function BMICalculator() {
  return (
    <div>
      <ComponentCart
        mainText=" BMI Calculator"
        bodyText='Click the "Calculate" button to get the third value.'
      />
    </div>
  );
}
