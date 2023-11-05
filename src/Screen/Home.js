import React from "react";
import "./Home.css";

import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import { Link } from "react-router-dom";

import Calculator from "../Icon/keys.png";
import ScientificCalculator from "../Icon/scientific-calculator.png";
import Calendar from "../Icon/calendar.png";

export default function Home() {
  return (
    <div>
      {/* Calculator */}
      <Link to="/">
        <div className="HomeItemBody">
          <img className="HomeItemImage" src={Calculator} alt={""} />
          <h2 className="HomeItemText-1">Calculator</h2>
          <h2 className="HomeItemText-2"></h2>
        </div>
      </Link>
      {/* Calendar */}
      <div className="HomeItemBody">calendar</div>
    </div>
  );
}
