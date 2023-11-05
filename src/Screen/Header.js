import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="HeaderBody">
      <div  style={{ flex:'1' }}>
        <Link to="/">
          <h1 style={{ color: "white" }}>App Name</h1>
        </Link>
      </div>
    </div>
  );
}
