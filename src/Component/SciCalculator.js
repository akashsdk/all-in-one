import React, { useState } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

export default function SciCalculator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setOutput(result);
    } catch (error) {
      setOutput("Error");
    }
  };
  return (
    <div>
      <ComponentCart
        mainText="Scientific Calculator"
        bodyText="This is an online javascript scientific calculator. You can click the buttons or type to perform calculations as you would on a physical calculator."
      />
      <div className="ComponentBody">
        <div style={{height:'30px'}}/>
        <div className="scientific-calculator">
          <div className="scientific-input-output">
            <input type="scientific-text" value={input} onChange={handleInputChange} />
            <div className="scientific-output">{output}</div>
          </div>
          <div className="scientific-buttons">
            <button className="scientific-button" onClick={handleClear}>C</button>
            <button className="scientific-button" onClick={handleClear}>AC</button>
            <button className="scientific-button" onClick={() => setInput(input + "7")}>7</button>
            <button className="scientific-button" onClick={() => setInput(input + "8")}>8</button>
            <button className="scientific-button" onClick={() => setInput(input + "9")}>9</button>
            <button className="scientific-button" onClick={() => setInput(input + "+")}>+</button>
            <button className="scientific-button" onClick={() => setInput(input + "4")}>4</button>
            <button className="scientific-button" onClick={() => setInput(input + "5")}>5</button>
            <button className="scientific-button" onClick={() => setInput(input + "6")}>6</button>
            <button className="scientific-button" onClick={() => setInput(input + "-")}>-</button>
            <button className="scientific-button" onClick={() => setInput(input + "1")}>1</button>
            <button className="scientific-button" onClick={() => setInput(input + "2")}>2</button>
            <button className="scientific-button" onClick={() => setInput(input + "3")}>3</button>
            <button className="scientific-button" onClick={() => setInput(input + "*")}>*</button>
            <button className="scientific-button" onClick={() => setInput(input + "0")}>0</button>
            <button className="scientific-button" onClick={() => setInput(input + ".")}>.</button>
            <button className="scientific-button" onClick={() => setInput(input + "(")}>(</button>
            <button className="scientific-button" onClick={() => setInput(input + ")")}>)</button>
            <button className="scientific-button" onClick={() => setInput(input + "/")}>/</button>
            <button className="scientific-button" onClick={() => setInput(input + "Math.sin(")}>sin</button>
            <button className="scientific-button" onClick={() => setInput(input + "Math.cos(")}>cos</button>
            <button className="scientific-button" onClick={() => setInput(input + "Math.tan(")}>tan</button>
            <button className="scientific-button" onClick={() => setInput(input + "Math.sqrt(")}>√</button>
            <button className="scientific-button" onClick={() => setInput(input + "**")}>^</button>
            <button className="scientific-button2" onClick={handleCalculate}>=</button>
          </div>
        </div>
        <div style={{height:'30px'}}/>
      </div>
    </div>
  );
}
