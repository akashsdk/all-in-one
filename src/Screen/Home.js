import React from "react";
import "./Home.css";

import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import { Link } from "react-router-dom";

import Calculator from "../Icon/keys.png";
import ScientificCalculator from "../Icon/scientific-calculator.png";
import Calendar from "../Icon/calendar.png";
import rubikCube from "../Icon/rubik.png";
import GPACalculator from "../Icon/gpa.png";
import Stopwatch from "../Icon/stopwatch.png";
import Timers from "../Icon/sand-clock.png";
import Notepad from "../Icon/notes.png";
import voiceRecord from "../Icon/voice.png";
import internetSpeed from "../Icon/medium.png";
import Maps from '../Icon/map.png';

export default function Home() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        {/* Calculator */}
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="HomeItemBody">
            <img className="HomeItemImage" src={Calculator} alt={""} />
            <h2 className="HomeItemText-1">Calculator</h2>
            <h2 className="HomeItemText-2"></h2>
          </div>
        </Link>
        {/* ScientificCalculator */}
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="HomeItemBody">
            <img
              className="HomeItemImage"
              src={ScientificCalculator}
              alt={""}
            />
            <h2 className="HomeItemText-1">Scientific</h2>
            <h2 className="HomeItemText-2">Calculator</h2>
          </div>
        </Link>
        {/* GPA Calculator */}
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="HomeItemBody">
            <img className="HomeItemImage" src={GPACalculator} alt={""} />
            <h2 className="HomeItemText-1">GPA</h2>
            <h2 className="HomeItemText-2">Calculator</h2>
          </div>
        </Link>
        {/* Calendar */}
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="HomeItemBody">
            <img className="HomeItemImage" src={Calendar} alt={""} />
            <h2 className="HomeItemText-1">Calendar</h2>
          </div>
        </Link>
        {/* rubik's cube */}
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="HomeItemBody">
            <img className="HomeItemImage" src={rubikCube} alt={""} />
            <h2 className="HomeItemText-1">Rubik's</h2>
            <h2 className="HomeItemText-2">Cube</h2>
          </div>
        </Link>
      </div>
      <div style={{ display: "flex" }}>
        {/* Stopwatch */}
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="HomeItemBody">
            <img className="HomeItemImage" src={Stopwatch} alt={""} />
            <h2 className="HomeItemText-1">Stopwatch</h2>
          </div>
        </Link>
        {/* Timers */}
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="HomeItemBody">
            <img className="HomeItemImage" src={Timers} alt={""} />
            <h2 className="HomeItemText-1">Timer's</h2>
          </div>
        </Link>
        {/* Note pad */}
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="HomeItemBody">
            <img className="HomeItemImage" src={Notepad} alt={""} />
            <h2 className="HomeItemText-1">Notepad</h2>
          </div>
        </Link>
        {/* voice Record */}
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="HomeItemBody">
            <img className="HomeItemImage" src={voiceRecord} alt={""} />
            <h2 className="HomeItemText-1">Voice</h2>
            <h2 className="HomeItemText-2">Record</h2>
          </div>
        </Link>
        {/* Internet Speed */}
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="HomeItemBody">
            <img className="HomeItemImage" src={internetSpeed} alt={""} />
            <h2 className="HomeItemText-1">Internet</h2>
            <h2 className="HomeItemText-2">Speed</h2>
          </div>
        </Link>
      </div>
      <div style={{ display: "flex" }}>
        {/* Maps */}
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="HomeItemBody">
            <img className="HomeItemImage" src={Maps} alt={""} />
            <h2 className="HomeItemText-1">Maps</h2>
          </div>
        </Link>
        
      </div>
    </div>
  );
}
