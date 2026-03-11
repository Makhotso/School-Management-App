import React from "react";
import { Routes, Route } from "react-router-dom";

import TeacherDashboard from "../pages/teachers/TeacherDashboard";
import AssignAssignments from "../pages/teachers/AssignAssignments";
import CaptureMarks from "../pages/teachers/CaptureMarks";
import TeacherClasses from "../pages/teachers/TeacherClasses";

const TeacherRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<TeacherDashboard />} />
      <Route path="assign" element={<AssignAssignments />} />
      <Route path="marks" element={<CaptureMarks />} />
      <Route path="classes" element={<TeacherClasses />} />
    </Routes>
  );
};

export default TeacherRoutes;