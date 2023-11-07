import React, { useState } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

import { MinusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function GPACalculator() {


  const [courses, setCourses] = useState([
    { name: '', credits: 0, grade: 'A' },
  ]);
  const [gpa, setGpa] = useState(0);

  const handleAddCourse = () => {
    setCourses([...courses, { name: '', credits: 0, grade: 'A' }]);
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
  };

  const gradeToPoints = (grade) => {
    switch (grade) {
      case 'A':
        return 4.0;
      case 'B':
        return 3.0;
      case 'C':
        return 2.0;
      case 'D':
        return 1.0;
      case 'F':
        return 0.0;
      default:
        return 0.0;
    }
  };


  return (
    <div>
      <ComponentCart
        mainText="GPA Calculator"
        bodyText="The calculator can be used to determine the minimum GPA required in future courses to raise GPA to a desired level or maintain the GPA above a certain level."
      />

      <div className="ComponentBody">
      <div>
      <h1>GPA Calculator</h1>
      {courses.map((course, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Course Name"
            value={course.name}
            onChange={(e) => handleCourseChange(index, 'name', e.target.value)}
          />
          <input
            type="number"
            placeholder="Credits"
            value={course.credits}
            onChange={(e) => handleCourseChange(index, 'credits', e.target.value)}
          />
          <select
            value={course.grade}
            onChange={(e) => handleCourseChange(index, 'grade', e.target.value)}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>
          <button onClick={() => handleRemoveCourse(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddCourse}>Add Course</button>
      <button onClick={calculateGpa}>Calculate GPA</button>
      <div>
        <p>Your GPA is: {gpa}</p>
      </div>
    </div>
      </div>
    </div>
  );
}
