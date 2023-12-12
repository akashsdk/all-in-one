import React from 'react'
import './Component.css';
import ComponentCart from "../Cart/ComponentCart";

import fastLOgo from '../Icon/Screenshot 2023-12-13 at 1.24.46 AM.png';


export default function InternetSpeed() {
  return (
    <div>
      <ComponentCart
        mainText="Internet Speed"
        bodyText="InternetSpeed..."
      />
      <div className="ComponentBody">
      <a
            style={{ textDecoration: "none" }}
            href="https://fast.com/"
            target="_blank"
          >
            aksh
          </a>
          
          <div className='InternetSpeedDiv'>
          <img height={170} width={200} src={fastLOgo} alt=''/>
          </div>
      </div>
    </div>
  )
}
