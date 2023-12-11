import React, { useState } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";
import { Button, message, Modal } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export default function Notepad() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleTextChange2 = (event) => {
    const inputValue = event.target.value;

    setText2(inputValue);
  };

  const handleDownload = () => {
    if (text.trim() === "") {
      messageApi.open({
        type: "warning",
        content:
          "The Notepad is empty. Please add some text before downloading!",
      });
      return;
    }

    const formattedHeader = `<span style="font-weight: bold; font-size: 20px;">${text2}</span>`;
    const formattedBody = `<span style="font-size: 16px;">${text}</span>`;
    const formattedText = `Header: ${formattedHeader} <br/> Body: ${formattedBody}`;

    const blob = new Blob([formattedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "notepad_text.txt";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    messageApi.open({
      type: "success",
      content: "Successfully Downloaded.",
    });
  };

  const handleClean = () => {
    setIsModalOpen(false);
    setText("");
    messageApi.open({
      type: "success",
      content: "Cleaned!!",
    });
  };
  return (
    <div>
      {contextHolder}
      <ComponentCart mainText="Notepad" bodyText="Notepad..." />
      <div className="ComponentBody">
        <div>
        <div style={{height:'1px'}} />
          <h1> Write your notes below </h1>
          <input 
          type="text"
          style={{ fontWeight: 'bold' }}
          value={text2}
          onChange={handleTextChange2}
          placeholder="hjjjj"/>
          <textarea
          className="notepad-textarea"
            value={text}
            onChange={handleTextChange}
            rows={10}
            cols={50}
          />
          <br />
          <div style={{height:'30px'}} />
          <div>
            <Button
              onClick={handleDownload}
              type="primary"
              size="large"
              style={{
                marginRight: "30px",
              }}
              icon={<DownloadOutlined />}
            >
              Download
            </Button>
            <Button onClick={showModal} size="large" type="primary" danger>
              Clean
            </Button>

            <Modal
              title="Do you want to clean? Press 'OK' "
              open={isModalOpen}
              onOk={handleClean}
              onCancel={handleCancel}
            ></Modal>
          </div>
          <div style={{height:'30px'}} />
        </div>
      </div>
    </div>
  );
}
