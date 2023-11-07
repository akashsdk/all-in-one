import React from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Select } from "antd";
const onFinish = (values) => {
  console.log("Received values of form:", values);
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export default function GPACalculator() {
  return (
    <div>
      <ComponentCart
        mainText="GPA Calculator"
        bodyText="Perform bitwise and bit shift operations."
      />
      <div className="ComponentBody">
        <div className="gpaBody">
          <div style={{ height: "30px" }} />
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            autoComplete="off"
          >
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: "flex",
                        marginBottom: 8,
                      }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "Course"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing Course name",
                          },
                        ]}
                      >
                        <Input placeholder="Course" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "value"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing Grad",
                          },
                        ]}
                      >
                        <Select
                          // defaultValue='A+'
                          style={{
                            width: 120,
                          }}
                          onChange={handleChange}
                          options={[
                            {
                              value: "4.00",
                              label: "A+",
                            },
                            {
                              value: "	3.75",
                              label: "A",
                            },
                            {
                              value: "	3.50",
                              label: "A-",
                            },
                            {
                              value: "3.25",
                              label: "B+",
                            },
                            {
                              value: "3.00",
                              label: "B",
                            },
                            {
                              value: "2.75",
                              label: "B-",
                            },
                            {
                              value: "2.50",
                              label: "C+",
                            },
                            {
                              value: "2.25",
                              label: "C",
                            },
                            {
                              value: "2.00",
                              label: "D",
                            },
                            {
                              value: "0",
                              label: "F",
                            },
                          ]}
                        />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                      style={{
                        maxWidth: 400,
                      }}
                    >
                      Add Course
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Gat GPA
              </Button>
            </Form.Item>
          </Form>
          <h2 className="gpaH2Text">Your GPA is: 4.00</h2>
        </div>
      </div>
    </div>
  );
}
