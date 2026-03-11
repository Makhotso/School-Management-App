import React, { useState, useEffect } from "react";
import axios from "axios";

const CaptureMarks = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [mark, setMark] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/teacher/1/students");
        // Example: [{id:1, name:"John Doe"}, {id:2, name:"Jane Smith"}]
        setStudents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching students:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/teacher/1/marks", {
        studentId: selectedStudent,
        mark: mark,
      });
      alert("Mark submitted successfully!");
      setSelectedStudent("");
      setMark("");
    } catch (error) {
      console.error("Error submitting mark:", error);
      alert("Failed to submit mark");
    }
  };

  if (loading) return <p>Loading students...</p>;

  return (
    <div>
      <h1>Capture Marks</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student:</label>
          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
            required
          >
            <option value="">Select student</option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Mark:</label>
          <input
            type="number"
            value={mark}
            onChange={(e) => setMark(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit Mark</button>
      </form>
    </div>
  );
};

export default CaptureMarks;