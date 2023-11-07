import React, { useState } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

import { MinusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function CGPACalculator() {
  const [outputValue, setOutputValue] = useState("");
  const [outputValue2, setOutputValue2] = useState("");
  const [courses, setCourses] = useState([
    { name: "", grade: "", credits: "" },
  ]);
  const [gpa, setGpa] = useState(0);

  const handleCourseChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCourses = [...courses];
    updatedCourses[index][name] = value;
    setCourses(updatedCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { name: "", grade: "", credits: "" }]);
  };

  const removeCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  const calculateGpa = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (const course of courses) {
      const credit = parseFloat(course.credits);
      totalCredits += credit;
      totalPoints += parseFloat(course.grade) * credit;
    }

    const gpaValue = totalPoints / totalCredits;
    setGpa(gpaValue);

    if (gpaValue >= 0 && gpaValue <= 4) {
      if (gpaValue >= 0 && gpaValue < 2) {
        setOutputValue("F");
        setOutputValue2("(<40% Less than 40%)");
      } else if (gpaValue >= 2 && gpaValue < 2.25) {
        setOutputValue("D");
        setOutputValue2("(40% to less than 45%)");
      } else if (gpaValue >= 2.25 && gpaValue < 2.5) {
        setOutputValue("C");
        setOutputValue2("(45% to less than 50%)");
      } else if (gpaValue >= 2.5 && gpaValue < 2.75) {
        setOutputValue("C+");
        setOutputValue2("(50% to less than 55%)");
      } else if (gpaValue >= 2.75 && gpaValue < 3.0) {
        setOutputValue("B-");
        setOutputValue2("(55% to less than 60%)");
      } else if (gpaValue >= 3.0 && gpaValue < 3.25) {
        setOutputValue("B");
        setOutputValue2("(60% to less than 65%)");
      } else if (gpaValue >= 3.25 && gpaValue < 3.5) {
        setOutputValue("B+");
        setOutputValue2("(65% to less than 70%)");
      } else if (gpaValue >= 3.5 && gpaValue < 3.75) {
        setOutputValue("A-");
        setOutputValue2("(70% to less than 75%)");
      } else if (gpaValue >= 3.75 && gpaValue < 4) {
        setOutputValue("A");
        setOutputValue2("(75% to less than 80%)");
      } else if (gpaValue >= 4) {
        setOutputValue("A+");
        setOutputValue2("(80% and above)");
      }
    } else {
      setOutputValue("Error !!");
      setOutputValue2("Must be CGPA (0<4)");
    }
  };

  const clean = () => {
    window.location.reload(false);
  };
  return (
    <div>
      <ComponentCart mainText="CGPA Calculator" bodyText="cGPA Calculator." />

      <div className="ComponentBody">
        <div style={{ height: "20px" }} />
        <div>
          <h1 style={{ color: "rgb(245, 4, 112" }}>Result: {gpa.toFixed(2)}</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-30px",
            }}
          >
            <p>{outputValue}</p>
            <p style={{ marginLeft: "5px", opacity: ".5" }}>{outputValue2}</p>
          </div>
          {courses.map((course, index) => (
            <div key={index} style={{ marginTop: "10px" }}>
              <input
                className="GPA-Input"
                type="text"
                placeholder="Course Name"
                name="name"
                value={course.name}
                onChange={(e) => handleCourseChange(e, index)}
              />
              <input
                className="GPA-Input"
                type="number"
                placeholder="Grade (0-4)"
                name="grade"
                value={course.grade}
                onChange={(e) => handleCourseChange(e, index)}
              />
              <input
                className="GPA-Input"
                type="number"
                placeholder="Credits"
                name="credits"
                value={course.credits}
                onChange={(e) => handleCourseChange(e, index)}
              />
              <Button
                className="GPA-Button"
                shape="circle"
                onClick={() => removeCourse(index)}
                icon={<MinusCircleOutlined />}
              />
            </div>
          ))}

          <div style={{ marginTop: "20px" }}>
            <Button onClick={addCourse}>Add Course</Button>
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
            <p></p>
          </div>
        </div>
        <div style={{ height: "30px" }} />
      </div>
    </div>
  );
}
