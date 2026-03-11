import React, { useState, useEffect } from "react";
import axios from "axios";

const MyGrades = () => {
  const [loading, setLoading] = useState(true);
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/learners/1/grades");
        // Example:
        // [{subject: "Mathematics", assessment: "Test 1", mark: 78}, ...]
        setGrades(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching grades:", error);
        setLoading(false);
      }
    };

    fetchGrades();
  }, []);

  if (loading) return <p>Loading grades...</p>;

  return (
    <div>
      <h1>My Grades</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Assessment</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td>{item.assessment}</td>
              <td>{item.mark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyGrades;