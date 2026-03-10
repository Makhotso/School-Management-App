import React, { useEffect, useState } from 'react';
import { getAllGrades, createGrade, updateGrade, deleteGrade } from '../../api/gradeApi';
import { useNavigate } from 'react-router-dom';

import AdminAssignments from "./AdminAssignments";
import AdminLearners from "./AdminLearners";
import AdminTeachers from "./AdminTeachers";


const Grades = () => {
const navigate = useNavigate();
  const [grades, setGrades] = useState([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { fetchGrades(); }, []);

  const fetchGrades = async () => {
    setLoading(true);
    try {
      const data = await getAllGrades();
      setGrades(data);
    } catch {
      setError("Failed to load grades.");
    } finally { setLoading(false); }
  };

  const handleAddGrade = async () => {
    if (!name) return alert("Grade name is required.");
    try {
      await createGrade({ name });
      setName('');
      fetchGrades();
    } catch { alert("Error adding grade."); }
  };

  const handleUpdateGrade = async (g) => {
    const newName = prompt("Enter new grade name:", g.name);
    if (!newName) return;
    try {
      await updateGrade(g.id, { ...g, name: newName });
      fetchGrades();
    } catch { alert("Error updating grade."); }
  };

  const handleDeleteGrade = async (id) => {
    if (!window.confirm("Delete this grade?")) return;
    try { await deleteGrade(id); fetchGrades(); } catch { alert("Error deleting grade."); }
  };

  if (loading) return <p>Loading grades...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
    <button className="btn btn-secondary mb-3" onClick={() => navigate('/dashboard')}>
      ← Back to Dashboard
    </button>

      <h1>Grades</h1>
      <div className="mb-3">
        <input className="form-control mb-2" placeholder="Grade Name" value={name} onChange={e => setName(e.target.value)} />
        <button className="btn btn-primary" onClick={handleAddGrade}>Add Grade</button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Grade Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {grades.map(g => (
            <tr key={g.id}>
              <td>{g.name}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleUpdateGrade(g)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDeleteGrade(g.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grades;