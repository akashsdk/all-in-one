import React from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

import fastLOgo from "../Icon/Screenshot 2023-12-13 at 1.24.46 AM.png";
import googleLogo from '../Icon/google-fiber-logo.png';
import intLogo from '../Icon/download-speedtest net.png';

export default function InternetSpeed() {
  return (
    <div>
      <ComponentCart mainText="Internet Speed" bodyText="InternetSpeed..." />
      <div className="ComponentBody">
        <div>
        <a
          style={{ textDecoration: "none" }}
          href="https://www.speedtest.net/"
          target="_blank"
        >
          <div className="InternetSpeedDiv">
          <img height={180} width={200} src={intLogo} alt="" />
        </div>
        </a>
        


        <div style={{height:'20px'}} />
        <a
          style={{ textDecoration: "none" }}
          href="https://fast.com/"
          target="_blank"
        >
          <div className="InternetSpeedDiv">
          <img height={180} width={200} src={fastLOgo} alt="" />
        </div>
        </a>
        
        <div style={{height:'20px'}} />
        <a
          style={{ textDecoration: "none" }}
          href="https://fiber.google.com/speedtest/"
          target="_blank"
        >
          <div className="InternetSpeedDiv">
          <img height={180} width={200} src={googleLogo} alt="" />
        </div>
        </a>
        </div>
        
      </div>
    </div>
  );
}
