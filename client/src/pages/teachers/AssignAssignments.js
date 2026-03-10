// src/pages/teacher/AssignAssignments.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const AssignAssignments = () => {
  const [loading, setLoading] = useState(true);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/teacher/1/assignments");
        // Example: [{title:"Algebra HW", dueDate:"2026-03-10"}]
        setAssignments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching assignments:", error);
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  if (loading) return <p>Loading assignments...</p>;

  return (
    <div>
      <h1>Assignments</h1>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index}>
            {assignment.title} – Due {assignment.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignAssignments;