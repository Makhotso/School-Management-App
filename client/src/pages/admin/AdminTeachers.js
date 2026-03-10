import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllLearners } from "../../api/learnerApi";
import { getAllTeachers } from "../../api/teacherApi";
import { getAllGrades } from "../../api/gradeApi";
import { getAllAssignments } from "../../api/assignmentApi";

const Dashboard = () => {
  const [learners, setLearners] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [grades, setGrades] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [l, t, g, a] = await Promise.all([
          getAllLearners(),
          getAllTeachers(),
          getAllGrades(),
          getAllAssignments()
        ]);
        setLearners(l);
        setTeachers(t);
        setGrades(g);
        setAssignments(a);
      } catch (err) {
        console.error("Error fetching dashboard data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-3">School Management Dashboard</h1>
      <p>Welcome, Admin! Choose a section to manage:</p>

      <div className="row">
        {/* Learners */}
        <div className="col-md-3 mb-3">
          <Link to="/learners" className="card text-center text-decoration-none text-dark h-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Learners</h2>
              <p className="card-text">Total learners: {learners.length}</p>
              <p className="card-text small">View, add, edit, or remove learners</p>
              {learners.slice(-3).map(l => (
                <p key={l.id} className="small text-muted">{l.fullName} - Grade {l.grade?.name}</p>
              ))}
            </div>
          </Link>
        </div>

        {/* Teachers */}
        <div className="col-md-3 mb-3">
          <Link to="/teachers" className="card text-center text-decoration-none text-dark h-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Teachers</h2>
              <p className="card-text">Total teachers: {teachers.length}</p>
              <p className="card-text small">View, add, edit, or remove teachers</p>
              {teachers.slice(-3).map(t => (
                <p key={t.id} className="small text-muted">{t.fullName}</p>
              ))}
            </div>
          </Link>
        </div>

        {/* Grades */}
        <div className="col-md-3 mb-3">
          <Link to="/grades" className="card text-center text-decoration-none text-dark h-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Grades</h2>
              <p className="card-text">Total grades: {grades.length}</p>
              <p className="card-text small">View, add, edit, or remove grades</p>
              {grades.slice(-3).map(g => (
                <p key={g.id} className="small text-muted">{g.name}</p>
              ))}
            </div>
          </Link>
        </div>

        {/* Assignments */}
        <div className="col-md-3 mb-3">
          <Link to="/assignments" className="card text-center text-decoration-none text-dark h-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Assignments</h2>
              <p className="card-text">Total assignments: {assignments.length}</p>
              <p className="card-text small">View, add, edit, or remove assignments</p>
              {assignments.slice(-3).map(a => (
                <p key={a.id} className="small text-muted">{a.title}</p>
              ))}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;