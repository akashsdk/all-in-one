import React, { useState } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

import { MinusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function GPACalculator() {
  return (
    <div>
      <ComponentCart
        mainText="GPA Calculator"
        bodyText="The calculator can be used to determine the minimum GPA required in future courses to raise GPA to a desired level or maintain the GPA above a certain level."
      />

      <div className="ComponentBody">GPACalculator</div>
    </div>
  );
}
