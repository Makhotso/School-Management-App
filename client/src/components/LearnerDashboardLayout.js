import React from "react";
import { Link } from "react-router-dom";
import "../styles/TeacherDashboardLayout.css"; // reuse same dashboard styling

const LearnerDashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">

      <aside className="sidebar">
        <h3>Learner Portal</h3>

        <ul>
          <li>
            <Link to="/learners/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/learners/subjects">My Subjects</Link>
          </li>

          <li>
            <Link to="/learners/assignments">Assignments</Link>
          </li>

          <li>
            <Link to="/learners/grades">Grades</Link>
          </li>

          <li>
            <Link to="/learners/grades">Sports</Link>
          </li>

           <li>
             <Link to="/learners/grades">Extra Activities</Link>
           </li>

          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </aside>

      <main className="dashboard-content">
        {children}
      </main>

    </div>
  );
};

export default LearnerDashboardLayout;