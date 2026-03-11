import React, { useState, useEffect } from "react";
import axios from "axios";

const TeacherClasses = () => {
  const [loading, setLoading] = useState(true);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/teacher/1/classes");
        // Example: [{id:1, name:"Grade 10 - Math"}, {id:2, name:"Grade 11 - Math"}]
        setClasses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching classes:", error);
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  if (loading) return <p>Loading classes...</p>;

  return (
    <div>
      <h1>My Classes</h1>
      <ul>
        {classes.map((cls) => (
          <li key={cls.id}>{cls.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherClasses;