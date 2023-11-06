import React from "react";
import "./Home.css";
import HomeItem from "../Cart/HomeItem";

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
import Maps from "../Icon/map.png";
import languageTranslate from '../Icon/translation.png';

export default function Home() {
  return (
    <div >
      <div style={{ display: "flex" }}>
        {/* Calculator */}
        <Link style={{ textDecoration: "none" }} to="/Calculator">
          <HomeItem Img={Calculator} FastText="Calculator" />
        </Link>
        {/* ScientificCalculator */}
        <Link style={{ textDecoration: "none" }} to="/Scientific-Calculator">
          <HomeItem
            Img={ScientificCalculator}
            FastText="Scientific"
            ScendText="Calculator"
          />
        </Link>
        {/* GPA Calculator */}
        <Link style={{ textDecoration: "none" }} to="/GPA-Calculator">
          <HomeItem Img={GPACalculator} FastText="GPA" ScendText="Calculator" />
        </Link>
        {/* Calendar */}
        <Link style={{ textDecoration: "none" }} to="/Calendar">
          <HomeItem Img={Calendar} FastText="Calendar" ScendText="" />
        </Link>
        {/* rubik's cube */}
        <Link style={{ textDecoration: "none" }} to="/Rubik-Cube">
          <HomeItem Img={rubikCube} FastText="Rubik's" ScendText="Cube" />
        </Link>
        </div>
        <div style={{ display: "flex" }}>
        {/* Stopwatch */}
        <Link style={{ textDecoration: "none" }} to="/Stopwatch">
          <HomeItem Img={Stopwatch} FastText="Stopwatch" ScendText="" />
        </Link>
        {/* Timers */}
        <Link style={{ textDecoration: "none" }} to="/Timers">
          <HomeItem Img={Timers} FastText="Timer's" ScendText="" />
        </Link>
        {/* Note pad */}
        <Link style={{ textDecoration: "none" }} to="/Notepad">
          <HomeItem Img={Notepad} FastText="Notepad" ScendText="" />
        </Link>
        {/* voice Record */}
        <Link style={{ textDecoration: "none" }} to="/Voice-Record">
          <HomeItem Img={voiceRecord} FastText="Voice" ScendText="Record" />
        </Link>
        {/* Internet Speed */}
        <Link style={{ textDecoration: "none" }} to="/Internet-Speed">
          <HomeItem Img={internetSpeed} FastText="Internet" ScendText="Speed" />
        </Link>
        </div>
        <div style={{ display: "flex" }}>
        {/* Maps */}
        <Link style={{ textDecoration: "none" }} to="/Maps">
          <HomeItem Img={Maps} FastText="Maps" ScendText="" />
        </Link>
        {/* Maps */}
        <Link style={{ textDecoration: "none" }} to="/Language-Translate">
          <HomeItem Img={languageTranslate} FastText="Language" ScendText="Translate" />
        </Link>
      </div>
    </div>
  );
}
