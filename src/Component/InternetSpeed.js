import React from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

import fastLOgo from "../Icon/Screenshot 2023-12-13 at 1.24.46 AM.png";

export default function InternetSpeed() {
  const goToFacebook = () => {
    window.open('https://www.facebook.com', '_blank');  // Replace with the desired Facebook URL
  };
  return (
    <div>
      <ComponentCart mainText="Internet Speed" bodyText="InternetSpeed..." />
      <div className="ComponentBody">
        <a
          style={{ textDecoration: "none" }}
          href="https://fast.com/"
          target="_blank"
        >
          <div className="InternetSpeedDiv">
          <img height={180} width={200} src={fastLOgo} alt="" />
        </div>
        </a>
        {/* <button onClick={goToFacebook}>
        <div className="InternetSpeedDiv">
          <img height={10} width={200} src={fastLOgo} alt="" />
        </div>
        </button> */}
        
      </div>
    </div>
  );
}
