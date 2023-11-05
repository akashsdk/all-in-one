import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Tasnim Shahriar Akash</p>
      </div>
    </footer>
  );
}
