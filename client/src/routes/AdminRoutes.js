import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminAssignments from "../pages/admin/AdminAssignments";
import AdminGrades from "../pages/admin/AdminGrades";
import AdminLearners from "../pages/admin/AdminLearners";
import AdminTeachers from "../pages/admin/AdminTeachers";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="learners" element={<AdminLearners />} />
      <Route path="teachers" element={<AdminTeachers />} />
      <Route path="grades" element={<AdminGrades />} />
      <Route path="assignments" element={<AdminAssignments />} />
    </Routes>
  );
};

export default AdminRoutes;