import React, { useState } from "react";
import "./Footer.css";
import { Button, Drawer, Space, Input, message } from "antd";

import { UserOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [placement] = useState("bottom");

  const onClose = () => {
    setOpen(false);
  };

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const success = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...!",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Send to Success",
        duration: 2,
      });
      setOpen(false);
    }, 1000);
  };
  return (
    <div>
      {contextHolder}
      <div className="FeedbackBox">
        <h2 className="FeedbackText-1">Your Feedback</h2>
        <p className="FeedbackText-2">
          We would love to hear your feedback on our website. Please fill out
          the form,
          <Button
            danger
            onClick={() => {
              setOpen(true);
            }}
            style={{
              color: "#fb6565",
              border: "none",
              backgroundColor: "transparent",
              marginTop: "-35px",
              fontSize: "18px",
              marginLeft: "-10px",
            }}
          >
            Open
          </Button>
        </p>
      </div>

      <footer className="footer">
        <div className="container">
          <Button
            type="link"
            className="footerButton"
            href="https://my-portfolio-d43ec.web.app/"
            target="_blank"
          >
            <h3>
              &copy; {new Date().getFullYear()} Tasnim Shahriar Akash | All
              rights reserved{" "}
            </h3>
          </Button>
        </div>
      </footer>

      {/* Drawer */}
      <Drawer
        title="Feedback Form"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose} style={{ borderColor: "#fb6565" }}>
              Cancel
            </Button>
          </Space>
        }
      >
        <div className="feedbackOpenBox">
          <br />
          <Input placeholder="Name" prefix={<UserOutlined />} />
          <br />
          <br />
          <Input placeholder="Email" prefix={<MailOutlined />} />
          <br />
          <br />
          <Input placeholder="Feedback" prefix={<MessageOutlined />} />
          <br />
          <br />
          <Button onClick={success} style={{ borderColor: "aqua" }}>
            Send
          </Button>
          <br />
        </div>
      </Drawer>
    </div>
  );
}
