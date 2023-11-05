import React from "react";
import "./Footer.css";
import { Button } from "antd";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Button
          type="link"
          className="footerButton"
          href="https://my-portfolio-d43ec.web.app/"
          target="_blank"
        >
          <h3>&copy; {new Date().getFullYear()} by Tasnim Shahriar Akash</h3>
        </Button>
      </div>
    </footer>
  );
}
