// src/pages/student/StudentLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
// src/pages/learners/LearnerLayout.jsx
import MyDashboard from "./MyDashboard";
import MyAssignments from "./MyAssignments";
import MySubjects from "./MySubjects";
import MyGrades from "./MyGrades";

const LearnerLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <nav
        style={{
          width: "200px",
          background: "#f2f2f2",
          padding: "20px",
          height: "100vh",
        }}
      >
        <h3>Student Portal</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/learners/dashboard">Dashboard</Link></li>
          <li><Link to="/learners/subjects">Subjects</Link></li>
          <li><Link to="/learners/grades">Grades</Link></li>
          <li><Link to="/learners/assignments">Assignments</Link></li>
        </ul>
      </nav>

      {/* Page Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default LearnerLayout;