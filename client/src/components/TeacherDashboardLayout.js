import React from "react";
import { Link } from "react-router-dom";
import "../styles/TeacherDashboardLayout.css";

const TeacherDashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">

      <aside className="sidebar">
        <h3>Teacher Portal</h3>
       <ul>
         <li>
           <Link to="/teachers/dashboard">Dashboard</Link>
         </li>
         <li>
           <Link to="/teachers/classes">My Learners</Link>
         </li>
         <li>
           <Link to="/teachers/assign">Assignments</Link>
         </li>
         <li>
           <Link to="/teachers/marks">Reports</Link>
         </li>
         <li>
           <Link to="/logout">Logout</Link>
         </li>
       </ul>
      </aside>

      <main className="dashboard-content">
        {children}
      </main>

    </div>
  );
};

export default TeacherDashboardLayout;