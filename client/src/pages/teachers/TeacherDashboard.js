import React, { useEffect, useState } from "react";
import TeacherDashboardLayout from "../../components/TeacherDashboardLayout";
import "../../styles/TeacherDashboardLayout.css";
import axios from "axios";

const TeacherDashboard = () => {
  const [learners, setLearners] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all data needed for teacher view
        const learnersRes = await axios.get("http://localhost:8080/api/grades/all"); // grades
        const assignmentsRes = await axios.get("http://localhost:8080/api/assignments/all"); // assignments

        setGrades(learnersRes.data);
        setAssignments(assignmentsRes.data);

        // Get all learners in all grades
        const learnersPerGrade = learnersRes.data.flatMap((g) => g.learners || []);
        setLearners(learnersPerGrade);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching teacher dashboard:", err);
        setError("Failed to fetch data from server");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <TeacherDashboardLayout><p>Loading data...</p></TeacherDashboardLayout>;
  if (error) return <TeacherDashboardLayout><p style={{ color: "red" }}>{error}</p></TeacherDashboardLayout>;

  return (
    <TeacherDashboardLayout>
      <h2 className="dashboard-title">Teacher Dashboard</h2>

      {/* ===== ANALYTICS CARDS ===== */}
      <div className="dashboard-cards">
        <div className="dashboard-card learners">
          <h5>My Learners</h5>
          <div className="stat-number">{learners.length}</div>
        </div>

        <div className="dashboard-card assignments">
          <h5>My Assignments</h5>
          <div className="stat-number">{assignments.length}</div>
        </div>
      </div>

      {/* ===== GRADES & ASSIGNMENTS ===== */}
      <div className="dashboard-section">
        <div className="recent-card">
          <h3>Assignments by Grade</h3>
          {grades.map((grade) => (
            <div key={grade.id}>
              <h5>{grade.name}</h5>
              <ul>
                {assignments
                  .filter((a) => a.gradeId === grade.id)
                  .map((a) => (
                    <li key={a.id}>{a.title}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="recent-card">
          <h3>My Learners by Grade</h3>
          {grades.map((grade) => (
            <div key={grade.id}>
              <h5>{grade.name}</h5>
              <ul>
                {(grade.learners || []).map((l) => (
                  <li key={l.id}>{l.fullName}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </TeacherDashboardLayout>
  );
};

export default TeacherDashboard;