import React from "react";
import { Link } from "react-router-dom";
import "../styles/DashboardLayout.css";

const DashboardLayout = ({ children }) => {

  return (

    <div className="dashboard-container">

      <aside className="sidebar">

        <h3>Admin Portal</h3>

        <ul>

          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/admin/learners">Learners</Link>
          </li>

          <li>
            <Link to="/admin/teachers">Teachers</Link>
          </li>

          <li>
            <Link to="/admin/grades">Grades</Link>
          </li>

          <li>
            <Link to="/admin/assignments">Assignments</Link>
          </li>

          <li>
            <Link to="/admin/announcements">Announcements</Link>
          </li>

        </ul>

      </aside>

      <main className="dashboard-content">

        {children}

      </main>

    </div>

  );
};

export default DashboardLayout;