import React from "react";
import './Component.css';
import ComponentCart from "../Cart/ComponentCart";

export default function BitwiseCalculator() {
  return (
    <div>
      <ComponentCart
        mainText="Bitwise Calculator"
        bodyText="Perform bitwise and bit shift operations."
      />
    </div>
  );
}
