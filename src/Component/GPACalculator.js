import React, { useState } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

import { MinusCircleOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";

export default function GPACalculator() {
  const [outputValue, setOutputValue] = useState("");
  const [outputValue2, setOutputValue2] = useState("");
  const [courses, setCourses] = useState([
    { name: "", credits: 0, grade: "A" },
  ]);
  const [gpa, setGpa] = useState(0);

  const handleAddCourse = () => {
    setCourses([...courses, { name: "", credits: 0, grade: "A" }]);
  };

  const handleRemoveCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const calculateGpa = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (const course of courses) {
      const credit = parseFloat(course.credits);
      totalCredits += credit;
      totalPoints += credit * gradeToPoints(course.grade);
    }

    const gpaValue = totalPoints / totalCredits;
    setGpa(gpaValue.toFixed(2));


    if (gpaValue >= 0 && gpaValue <= 5) {
      if (gpaValue >= 0 && gpaValue < 1) {
        setOutputValue("Marks:");
        setOutputValue2("(00-32)");
      } else if (gpaValue >= 1 && gpaValue < 2) {
        setOutputValue("Marks");
        setOutputValue2("(33-39)");
      } else if (gpaValue >= 2 && gpaValue < 3) {
        setOutputValue("Marks");
        setOutputValue2("(40-49)");
      } else if (gpaValue >= 3 && gpaValue < 3.5) {
        setOutputValue("Marks");
        setOutputValue2("(50-59)");
      } else if (gpaValue >= 3.5 && gpaValue < 4) {
        setOutputValue("Marks");
        setOutputValue2("(60-69)");
      } else if (gpaValue >= 4 && gpaValue < 5) {
        setOutputValue("Marks");
        setOutputValue2("(70-79)");
      } else if (gpaValue >= 5) {
        setOutputValue("Marks");
        setOutputValue2("(80-100)");
      }
    } else {
      setOutputValue("Error !!");
      setOutputValue2("Must be CGPA (0<4)");
    }
  };

  const gradeToPoints = (grade) => {
    switch (grade) {
      case "A+":
        return 5.0;
        case "A":
        return 4.0;
      case "A-":
        return 3.5;
      case "B":
        return 3.0;
      case "C":
        return 2.0;
      case "D":
        return 1.0;
      case "F":
        return 0.0;
      default:
        return 0.0;
    }
  };


  


  const clean = () => {
    window.location.reload(false);
  };















  const dataSource = [
    {
      key: '1',
      grade: 'A+',
      class: '80-100',
      point: '5',
    },
    {
      key: '2',
      grade: 'A',
      class: '70-79',
      point: '4',
    },
    {
      key: '3',
      grade: 'A-',
      class: '60-69',
      point: '3.5',
    },
    {
      key: '4',
      grade: 'B',
      class: '50-59',
      point: '3',
    },
    {
      key: '5',
      grade: 'C',
      class: '40-49',
      point: '2',
    },
    {
      key: '6',
      grade: 'D',
      class: '33-39',
      point: '1',
    },
    {
      key: '7',
      grade: 'F',
      class: '00-33',
      point: '0',
    },
  ];
  
  const columns = [
    {
      title: 'Letter Grade',
      dataIndex: 'grade',
      key: 'grade',
    },
    {
      title: 'Class Interval (%)',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: 'Grade Point',
      dataIndex: 'point',
      key: 'point',
    },
  ];

  return (
    <div>
      <ComponentCart
        mainText="GPA Calculator"
        bodyText="The calculator can be used to determine the minimum GPA required in future courses to raise GPA to a desired level or maintain the GPA above a certain level."
      />

      <div className="ComponentBody">
        <div style={{ height: "20px" }} />
        <div>
          <h1 style={{ color: "rgb(245, 4, 112" }}>Result: {gpa}</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-30px",
            }}
          >
            <p style={{  opacity: ".5" }}>{outputValue}</p>
            <p style={{ marginLeft: "5px", opacity: ".5" }}>{outputValue2}</p>
          </div>
          
          {courses.map((course, index) => (
            <div key={index} style={{ marginTop: "10px" }}>
              <input
                className="GPA-Input"
                type="text"
                placeholder="Course Name"
                value={course.name}
                onChange={(e) =>
                  handleCourseChange(index, "name", e.target.value)
                }
              />
              <input
                className="GPA-Input"
                type="number"
                placeholder="Credits"
                value={course.credits}
                onChange={(e) =>
                  handleCourseChange(index, "credits", e.target.value)
                }
              />
              <select
                className="GPA-Input"
                value={course.grade}
                onChange={(e) =>
                  handleCourseChange(index, "grade", e.target.value)
                }
              >
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </select>
              <Button
                className="GPA-Button"
                shape="circle"
                onClick={() => handleRemoveCourse(index)}
                icon={<MinusCircleOutlined />}
              />
            </div>
          ))}

          <div style={{ marginTop: "20px" }}>
            <Button onClick={handleAddCourse}>Add Course</Button>
            <Button
              style={{ marginLeft: "10px" }}
              type="primary"
              onClick={calculateGpa}
            >
              Calculate GPA
            </Button>
            <Button
              style={{ marginLeft: "10px" }}
              onClick={clean}
              type="dashed"
              danger
            >
              Clean
            </Button>
          </div>
          
        </div>
        <div style={{ height: "30px" }} />
        <div>
        <Table dataSource={dataSource} columns={columns} />
        </div>

        <div style={{ height: "30px" }} />
      </div>
    </div>
  );
}
