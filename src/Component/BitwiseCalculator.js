import React, { useState } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

import {  Button } from "antd";

export default function BitwiseCalculator() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [binaryResult, setBinaryResult] = useState(0);
  const [decimalResult, setDecimalResult] = useState(0);
  const [hexResult, setHexResult] = useState(0);

  const handleInput1Change = (e) => {
    setInput1(parseInt(e.target.value, 10));
  };

  const handleInput2Change = (e) => {
    setInput2(parseInt(e.target.value, 10));
  };

  const calculateResults = () => {
    const andResult = input1 & input2;
    const orResult = input1 | input2;
    const xorResult = input1 ^ input2;

    setBinaryResult({
      AND: andResult.toString(2),
      OR: orResult.toString(2),
      XOR: xorResult.toString(2),
    });

    setDecimalResult({
      AND: andResult,
      OR: orResult,
      XOR: xorResult,
    });

    setHexResult({
      AND: andResult.toString(16),
      OR: orResult.toString(16),
      XOR: xorResult.toString(16),
    });
  };

  const clean = () => {
    setInput1(0);
    setInput2(0);
    setBinaryResult(0);
    setDecimalResult(0);
    setHexResult(0);
  };

  return (
    <div>
      <ComponentCart
        mainText="Bitwise Calculator"
        bodyText="Perform bitwise and bit shift operations."
      />
      <div className="ComponentBody">
        <div>
          <div style={{ height: "30px" }} />
          <div style={{ marginTop:'10px' }}>
            <label>Input 1: </label>
            <input type="number" value={input1} onChange={handleInput1Change} />
          </div>
          <div style={{ marginTop:'10px' }}>
            <label>Input 2: </label>
            <input type="number" value={input2} onChange={handleInput2Change} />
          </div>
          <div>
              <Button
                style={{
                  marginTop: "30px",
                  marginBottom: "50px",
                }}
                onClick={calculateResults}
                type="primary"
              >
                Calculate
              </Button>

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
          <div>
            <h2>Results:</h2>
            <div>
              <h3>Binary:</h3>
              <p>AND: {binaryResult.AND}</p>
              <p>OR: {binaryResult.OR}</p>
              <p>XOR: {binaryResult.XOR}</p>
            </div>
            <div>
              <h3>Decimal:</h3>
              <p>AND: {decimalResult.AND}</p>
              <p>OR: {decimalResult.OR}</p>
              <p>XOR: {decimalResult.XOR}</p>
            </div>
            <div>
              <h3>Hexadecimal:</h3>
              <p>AND: {hexResult.AND}</p>
              <p>OR: {hexResult.OR}</p>
              <p>XOR: {hexResult.XOR}</p>
            </div>
          </div>
          <div style={ {height:'30px'}}/>
        </div>
      </div>
    </div>
  );
}
