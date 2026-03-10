import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";

const TeacherDashboard = () => {
  const [stats, setStats] = useState({
    learners: 0,
    assignments: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/teacher/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <DashboardLayout>
      <h2 className="dashboard-title">Teacher Dashboard</h2>

      <div className="dashboard-cards">
        <div className="dashboard-card learners">
          <h3>Learners</h3>
          <p>{stats.learners}</p>
        </div>

        <div className="dashboard-card assignments">
          <h3>Assignments</h3>
          <p>{stats.assignments}</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;