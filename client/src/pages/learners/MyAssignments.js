import React, { useState, useEffect } from "react";
import axios from "axios";

const Assignments = () => {
  const [loading, setLoading] = useState(true);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/learner/1/assignments");
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
      <h1>My Assignments</h1>
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

export default Assignments;