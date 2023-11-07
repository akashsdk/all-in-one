import React, { useState } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

import { MinusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function GPACalculator() {
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
  };

  const clean = () => {
    
  };
  return (
    <div>
      <ComponentCart
        mainText="GPA Calculator"
        bodyText="Perform bitwise and bit shift operations."
      />
      <div className="ComponentBody">
        <div style={{ height: "20px" }} />
        <div>
          <h1 style={{ color: "rgb(245, 4, 112" }}>Result: {gpa.toFixed(2)}</h1>
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

          <div style={{marginTop:'20px'}}>
            <Button  onClick={addCourse}>Add Course</Button>
            <Button style={{marginLeft:'10px'}} type="primary" onClick={calculateGpa}>
              Calculate GPA
            </Button>
            <Button style={{marginLeft:'10px'}} onClick={clean} type="dashed" danger>
            Clean
            </Button>
          </div>
          
        </div>
        <div style={{ height: "30px" }} />
      </div>
    </div>
  );
}
