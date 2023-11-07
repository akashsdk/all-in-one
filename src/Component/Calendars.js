import React from 'react'
import './Component.css';
import ComponentCart from "../Cart/ComponentCart";

import { Calendar, theme } from "antd";

export default function Calendars() {
  const { token } = theme.useToken();
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div>
      <ComponentCart
        mainText="Calendars"
        bodyText=""
      />
      <div className="ComponentBody">
      <div className="calendarBody">
      <div style={{height:'30px'}}/>
      <p className="calendarPtext">Calendar</p>
      <div className="calendarLine" />
      <div className="calendarBox">
        <div style={wrapperStyle}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
      </div>
      <div style={{height:'30px'}}/>
    </div>
      </div>
    </div>
  )
}
