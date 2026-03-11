import React, { useEffect, useState } from "react";
import LearnerDashboardLayout from "../../components/LearnerDashboardLayout";
import axios from "axios";

const LearnerDashboard = () => {

  const [assignments, setAssignments] = useState([]);
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {

        const assignmentsRes = await axios.get("http://localhost:8080/api/assignments/all");
        const gradesRes = await axios.get("http://localhost:8080/api/grades/all");

        setAssignments(assignmentsRes.data);
        setGrades(gradesRes.data);

        setLoading(false);

      } catch (error) {
        console.error("Error loading learner dashboard:", error);
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  if (loading) {
    return (
      <LearnerDashboardLayout>
        <p>Loading dashboard...</p>
      </LearnerDashboardLayout>
    );
  }

  return (
    <LearnerDashboardLayout>

      <h2 className="dashboard-title">Learner Dashboard</h2>

      {/* DASHBOARD CARDS */}

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h5>Total Assignments</h5>
          <div className="stat-number">{assignments.length}</div>
        </div>

        <div className="dashboard-card">
          <h5>Grades Available</h5>
          <div className="stat-number">{grades.length}</div>
        </div>

      </div>

      {/* RECENT ASSIGNMENTS */}

      <div className="dashboard-section">

        <div className="recent-card">
          <h3>Recent Assignments</h3>

          <ul>
            {assignments.slice(0,5).map((assignment) => (
              <li key={assignment.id}>
                {assignment.title}
              </li>
            ))}
          </ul>

        </div>

        <div className="recent-card">
          <h3>My Grades</h3>

          <ul>
            {grades.slice(0,5).map((grade) => (
              <li key={grade.id}>
                {grade.name}
              </li>
            ))}
          </ul>

        </div>

      </div>

    </LearnerDashboardLayout>
  );
};

export default LearnerDashboard;