import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";

const LearnerDashboard = () => {
  const [stats, setStats] = useState({
    assignments: 0,
    grades: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/learner/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <DashboardLayout>
      <h2 className="dashboard-title">Learner Dashboard</h2>

      <div className="dashboard-cards">
        <div className="dashboard-card assignments">
          <h3>Assignments</h3>
          <p>{stats.assignments}</p>
        </div>

        <div className="dashboard-card grades">
          <h3>Grades</h3>
          <p>{stats.grades}</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LearnerDashboard;