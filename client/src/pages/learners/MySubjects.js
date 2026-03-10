// src/pages/student/MySubjects.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const MySubjects = () => {
  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        // Replace with your backend API endpoint
        const response = await axios.get("http://localhost:8080/api/learners/1/subjects");
        // Example response: ["Mathematics", "English", "Physical Sciences"]
        setSubjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching subjects:", error);
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  if (loading) return <p>Loading subjects...</p>;

  return (
    <div>
      <h1>My Subjects</h1>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default MySubjects;