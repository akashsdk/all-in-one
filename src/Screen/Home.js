import React from "react";
import "./Home.css";

import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import { Link } from "react-router-dom";

import Calculator from "../Icon/keys.png";
import ScientificCalculator from "../Icon/scientific-calculator.png";
import Calendar from "../Icon/calendar.png";
import rubikCube from '../Icon/rubik.png';
import GPACalculator from '../Icon/gpa.png';

export default function Home() {
  return (
    <div>
      <div className="HomeItem-MainBody">
        {/* Calculator */}
      <Link style={{textDecoration:'none'}} to="/" >
        <div className="HomeItemBody">
          <img className="HomeItemImage" src={Calculator} alt={""} />
          <h2 className="HomeItemText-1">Calculator</h2>
          <h2 className="HomeItemText-2"></h2>
        </div>
      </Link>
      {/* ScientificCalculator */}
      <Link style={{textDecoration:'none'}} to="/" >
        <div className="HomeItemBody">
          <img className="HomeItemImage" src={ScientificCalculator} alt={""} />
          <h2 className="HomeItemText-1">Scientific</h2>
          <h2 className="HomeItemText-2">Calculator</h2>
        </div>
      </Link>
      {/* GPA Calculator */}
      <Link style={{textDecoration:'none'}} to="/" >
        <div className="HomeItemBody">
          <img className="HomeItemImage" src={GPACalculator} alt={""} />
          <h2 className="HomeItemText-1">GPA</h2>
          <h2 className="HomeItemText-2">Calculator</h2>
        </div>
      </Link>
      {/* Calendar */}
      <Link style={{textDecoration:'none'}} to="/" >
        <div className="HomeItemBody">
          <img className="HomeItemImage" src={Calendar} alt={""} />
          <h2 className="HomeItemText-1">Calendar</h2>
        </div>
      </Link>
      {/* rubik's cube */}
      <Link style={{textDecoration:'none'}} to="/" >
        <div className="HomeItemBody">
          <img className="HomeItemImage" src={rubikCube} alt={""} />
          <h2 className="HomeItemText-1">Rubik's</h2>
          <h2 className="HomeItemText-2">Cube</h2>
        </div>
      </Link>
      </div>
      
      
    </div>
  );
}
