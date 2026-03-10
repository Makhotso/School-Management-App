// src/components/DashboardLayout.js
import React from "react";
import "../styles/DashboardLayout.css"; // <-- import from styles

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;