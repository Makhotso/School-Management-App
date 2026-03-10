import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserTie, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">School Management System</h1>
      <p className="home-subtitle">Select your portal to continue</p>

      <div className="portal-cards">
        <div className="portal-card admin" onClick={() => navigate("/admin/dashboard")}>
          <FaUserTie />
          <h3>Admin Portal</h3>
          <p>Manage learners, teachers, grades, and assignments.</p>
        </div>

        <div className="portal-card teacher" onClick={() => navigate("/teachers/dashboard")}>
          <FaChalkboardTeacher />
          <h3>Teacher Portal</h3>
          <p>Manage your classes, assignments, and student marks.</p>
        </div>

        <div className="portal-card learner" onClick={() => navigate("/learners/dashboard")}>
          <FaGraduationCap />
          <h3>Learner Portal</h3>
          <p>Check your grades, assignments, and subjects.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;