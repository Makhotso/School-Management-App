import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";

const AdminDashboard = () => {
  const [learners, setLearners] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [grades, setGrades] = useState([]);
  const [assignments, setAssignments] = useState([]); // <-- new state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from backend DTO endpoints
        const learnersRes = await axios.get("http://localhost:8080/api/learners/all");
        const teachersRes = await axios.get("http://localhost:8080/api/teachers/all");
        const gradesRes = await axios.get("http://localhost:8080/api/grades/all");
        const assignmentsRes = await axios.get("http://localhost:8080/api/assignments/all"); // <-- fetch assignments

        setLearners(learnersRes.data);
        setTeachers(teachersRes.data);
        setGrades(gradesRes.data);
        setAssignments(assignmentsRes.data); // <-- set assignments
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data from server");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <DashboardLayout>
        <p>Loading data...</p>
      </DashboardLayout>
    );

  if (error)
    return (
      <DashboardLayout>
        <p style={{ color: "red" }}>{error}</p>
      </DashboardLayout>
    );

  // Helper function to get grade name by ID
  const getGradeName = (gradeId) => {
    const grade = grades.find((g) => g.id === gradeId);
    return grade ? grade.name : "N/A";
  };

  // Helper function to get teacher name by ID
  const getTeacherName = (teacherId) => {
    const teacher = teachers.find((t) => t.id === teacherId);
    return teacher ? teacher.fullName : "N/A";
  };

 return (
   <DashboardLayout>
     <h2 className="dashboard-title">Admin Dashboard</h2>

     {/* ===== ANALYTICS CARDS ===== */}
     <div className="dashboard-cards">

       <div className="dashboard-card learners">
         <h5>Total Learners</h5>
         <div className="stat-number">{learners.length}</div>
       </div>

       <div className="dashboard-card teachers">
         <h5>Total Teachers</h5>
         <div className="stat-number">{teachers.length}</div>
       </div>

       <div className="dashboard-card grades">
         <h5>Total Grades</h5>
         <div className="stat-number">{grades.length}</div>
       </div>

       <div className="dashboard-card assignments">
         <h5>Total Assignments</h5>
         <div className="stat-number">{assignments.length}</div>
       </div>

     </div>

     {/* ===== RECENT ACTIVITY ===== */}

     <div className="dashboard-section">

       {/* Recent Assignments */}
       <div className="recent-card">
         <h3>Recent Assignments</h3>
         <ul>
           {assignments.slice(0,5).map((a) => (
             <li key={a.id}>
               {a.title} — {getGradeName(a.gradeId)}
             </li>
           ))}
         </ul>
       </div>

       {/* New Learners */}
       <div className="recent-card">
         <h3>Newest Learners</h3>
         <ul>
           {learners.slice(0,5).map((l) => (
             <li key={l.id}>
               {l.fullName} — {getGradeName(l.gradeId)}
             </li>
           ))}
         </ul>
       </div>

     </div>

   </DashboardLayout>
 );
};

export default AdminDashboard;