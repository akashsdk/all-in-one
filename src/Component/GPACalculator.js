import React, { useState } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

import { MinusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function GPACalculator() {
  return (
    <div>
      <ComponentCart mainText="GPA Calculator" bodyText="GPA Calculator." />

      <div className="ComponentBody">GPACalculator</div>
    </div>
  );
}
