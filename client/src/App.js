// src/App.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TeacherRoutes from "./routes/TeacherRoutes";
import AdminRoutes from "./routes/AdminRoutes";

import Loader from "./components/Loader";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAssignments from "./pages/admin/AdminAssignments";
import AdminGrades from "./pages/admin/AdminGrades";
import AdminLearners from "./pages/admin/AdminLearners";
import AdminTeachers from "./pages/admin/AdminTeachers";

// Learner
import MyDashboard from "./pages/learners/MyDashboard";
import MySubjects from "./pages/learners/MySubjects";
import MyGrades from "./pages/learners/MyGrades";
import MyAssignments from "./pages/learners/MyAssignments";

// Teacher
import TeacherDashboard from "./pages/teachers/TeacherDashboard";
import AssignAssignments from "./pages/teachers/AssignAssignments";
import CaptureMarks from "./pages/teachers/CaptureMarks";
import TeacherClasses from "./pages/teachers/TeacherClasses";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
     <Routes>

             {/* Home */}
             <Route path="/" element={<Home />} />

             {/* Admin */}
             <Route path="/admin/*" element={<AdminRoutes />} />

             {/* Teacher */}
             <Route path="/teachers/*" element={<TeacherRoutes />} />

             {/* Learner */}
             <Route path="/learners/dashboard" element={<MyDashboard />} />
             <Route path="/learners/subjects" element={<MySubjects />} />
             <Route path="/learners/grades" element={<MyGrades />} />
             <Route path="/learners/assignments" element={<MyAssignments />} />

           </Routes>

      <Footer />
    </>
  );
}

export default App;