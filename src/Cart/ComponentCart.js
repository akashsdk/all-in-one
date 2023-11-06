import React, { useState } from "react";
import "./ComponentCart.css";

import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import { HomeOutlined, RedoOutlined } from "@ant-design/icons";

export default function ComponentCart(props) {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    window.location.reload(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
    navigate("/");
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <div className="Com-Body">
      <div className="Com-Box">
        <h1 className="Com-Head-Text">{props.mainText}</h1>
        <h3 className="Com-Body-Text">
          {props.bodyText}
        </h3>
        <div className="Com-Box-Header">
          <Button
            className="Com-Box-Header-Icon"
            shape="circle"
            size="large"
            onClick={showModal2}
            icon={<HomeOutlined />}
          />

          <h2 className="Com-Box-Header-Text">{props.mainText}</h2>
          <Button
            className="Com-Box-Header-Button"
            shape="circle"
            size="large"
            onClick={showModal}
            icon={<RedoOutlined />}
          />
        </div>
        <Modal
          title="Refresh"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        ></Modal>
        <Modal
          title="Back To Home"
          open={isModalOpen2}
          onOk={handleOk2}
          onCancel={handleCancel2}
        ></Modal>
      </div>
    </div>
  );
}
