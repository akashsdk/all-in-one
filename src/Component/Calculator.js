import React , { useState } from 'react'
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function porcentagem(e) {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }
  return (
    <div>
      <ComponentCart
        mainText="Calculator"
        bodyText="Perform bitwise and bit shift operations."
      />
      <div className="ComponentBody">
      <div className="wrapper">
      <h1 className="resultado">{num}</h1>
      <div className="NormalCalculatorDiv">
        <button className="CalculatorButton" onClick={clear}>
          AC
        </button>
        <button className="CalculatorButton" onClick={changeSign}>
          +/-
        </button>
        <button className="CalculatorButton" onClick={porcentagem}>
          %
        </button>
        <button className="orange" onClick={operatorHandler} value={"/"}>
          /
        </button>
      </div>
      <div className="NormalCalculatorDiv">
        <button className="grey" onClick={inputNum} value={7}>
          7
        </button>
        <button className="grey" onClick={inputNum} value={8}>
          8
        </button>
        <button className="grey" onClick={inputNum} value={9}>
          9
        </button>
        <button className="orange" onClick={operatorHandler} value={"X"}>
          X
        </button>
      </div>
      <div className="NormalCalculatorDiv">
        <button className="grey" onClick={inputNum} value={4}>
          4
        </button>
        <button className="grey" onClick={inputNum} value={5}>
          5
        </button>
        <button className="grey" onClick={inputNum} value={6}>
          6
        </button>
        <button className="orange" onClick={operatorHandler} value={"-"}>
          -
        </button>
      </div>
      <div className="NormalCalculatorDiv">
        <button className="grey" onClick={inputNum} value={1}>
          1
        </button>
        <button className="grey" onClick={inputNum} value={2}>
          2
        </button>
        <button className="grey" onClick={inputNum} value={3}>
          3
        </button>
        <button className="orange" onClick={operatorHandler} value={"+"}>
          +
        </button>
      </div>
      <button className="grey" onClick={inputNum} value={0}>
        0
      </button>
      <button className="grey" onClick={inputNum} value={"00"}>
        00
      </button>
      <button className="grey" onClick={inputNum} value={"."}>
        .
      </button>
      <button className="orange" onClick={calculate}>
        =
      </button>
    </div>
      </div>
    </div>
  )
}
