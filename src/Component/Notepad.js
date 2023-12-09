import React, { useState } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";
import { Button, message } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export default function Notepad() {
  const [text, setText] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  // Function to handle text change
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "The Notepad is empty. Please add some text before downloading.",
    });
  };
  // Function to handle download button click
  const handleDownload = () => {
    if (text.trim() === "") {
      messageApi.open({
        type: "warning",
        content:
          "The Notepad is empty. Please add some text before downloading.",
      });
      return;
    }

    // Create a blob with the text content
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = "notepad_text.txt";
    document.body.appendChild(a);
    a.click();

    // Clean up by removing the temporary <a> and revoking the URL object
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Function to handle clean button click
  const handleClean = () => {
    setText("");
  };
  return (
    <div>
      {contextHolder}
      <ComponentCart mainText="Notepad" bodyText="Notepad..." />
      <div className="ComponentBody">
        <div>
          <h1>Notepad</h1>
          <textarea
            value={text}
            onChange={handleTextChange}
            rows={10}
            cols={50}
          />
          <br />

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
            <Button onClick={handleClean} size="large" type="primary" danger>
              Clean
            </Button>
            <Button onClick={warning}>Warning</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
