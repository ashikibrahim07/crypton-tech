import React, { useState, useEffect } from "react";
import LayersIcon from "@mui/icons-material/Layers";
import CodeIcon from "@mui/icons-material/Code";
import GridOnIcon from "@mui/icons-material/GridOn";
import ComputerIcon from "@mui/icons-material/Computer";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";

import "./App.scss";

const iconMapping = {
  layers: <LayersIcon />,
  code: <CodeIcon />,
  grid_on: <GridOnIcon />,
  computer: <ComputerIcon />,
  view_week: <ViewWeekIcon />,
};

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>My Courses</h1>
        <button className="view-all-button">View All</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Start Date</th>
            <th>Lesson Completed</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>
                <div className="course-content">
                  <div className={`course-icon ${course.icon}`}>
                    {iconMapping[course.icon]}
                  </div>
                  <div className="course-info">
                    <span className="coursename">{course.name}</span>
                    <span>{course.lessons} Lessons</span>
                  </div>
                </div>
              </td>
              <td>{course.startDate}</td>
              <td>
                {course.lessonsCompleted}/
                <span className="course-lessons">{course.lessons}</span> (
                {/* {((course.lessonsCompleted / course.lessons) * 100).toFixed(0)} */}
                {course.percentage}
                %)
              </td>
              <td>{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
