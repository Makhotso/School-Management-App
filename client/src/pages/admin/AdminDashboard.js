import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";

const AdminDashboard = () => {
  const [learners, setLearners] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const learnersRes = await axios.get("http://localhost:8080/api/learners/all");
        const teachersRes = await axios.get("http://localhost:8080/api/teachers/all");
        const gradesRes = await axios.get("http://localhost:8080/api/grades/all");

        setLearners(learnersRes.data);
        setTeachers(teachersRes.data);
        setGrades(gradesRes.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <DashboardLayout><p>Loading data...</p></DashboardLayout>;
  if (error) return <DashboardLayout><p style={{color: "red"}}>{error}</p></DashboardLayout>;

  return (
    <DashboardLayout>
      <h2 className="dashboard-title">Admin Dashboard</h2>

      <div className="dashboard-cards">
        <div className="dashboard-card learners">
          <h3>Learners</h3>
          <p>{learners.length}</p>
        </div>
        <div className="dashboard-card teachers">
          <h3>Teachers</h3>
          <p>{teachers.length}</p>
        </div>
        <div className="dashboard-card grades">
          <h3>Grades</h3>
          <p>{grades.length}</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;