import React from "react";
import './HomeItem.css';

export default function HomeItem(props) {
  return (
    <div className="HomeItemBody">
      <img className="HomeItemImage" src={props.Img} alt={""} />
      <h2 className="HomeItemText-1">{props.FastText}</h2>
      <h2 className="HomeItemText-2">{props.ScendText}</h2>
    </div>
  );
}
