import React, { useEffect, useState } from 'react';
import { getAllAssignments, createAssignment, updateAssignment, deleteAssignment } from '../../api/assignmentApi';
import { useNavigate } from 'react-router-dom';

import AdminTeachers from "./AdminTeachers";
import AdminGrades from "./AdminGrades";
import AdminLearners from "./AdminLearners";

const Assignments = () => {
const navigate = useNavigate();
  const [assignments, setAssignments] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [teacherId, setTeacherId] = useState(1);
  const [gradeId, setGradeId] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { fetchAssignments(); }, []);

  const fetchAssignments = async () => {
    setLoading(true);
    try {
      const data = await getAllAssignments();
      setAssignments(data);
    } catch {
      setError("Failed to load assignments.");
    } finally { setLoading(false); }
  };

  const handleAddAssignment = async () => {
    if (!title || !description) return alert("All fields required.");
    try {
      await createAssignment({ title, description, teacher: { id: teacherId }, grade: { id: gradeId } });
      setTitle(''); setDescription('');
      fetchAssignments();
    } catch { alert("Error adding assignment."); }
  };

  const handleUpdateAssignment = async (a) => {
    const newTitle = prompt("New title:", a.title);
    const newDesc = prompt("New description:", a.description);
    if (!newTitle || !newDesc) return;
    try {
      await updateAssignment(a.id, { ...a, title: newTitle, description: newDesc });
      fetchAssignments();
    } catch { alert("Error updating assignment."); }
  };

  const handleDeleteAssignment = async (id) => {
    if (!window.confirm("Delete this assignment?")) return;
    try { await deleteAssignment(id); fetchAssignments(); } catch { alert("Error deleting assignment."); }
  };

  if (loading) return <p>Loading assignments...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
    <button className="btn btn-secondary mb-3" onClick={() => navigate('/dashboard')}>
      ← Back to Dashboard
    </button>

      <h1>Assignments</h1>
      <div className="mb-3">
        <input className="form-control mb-2" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input className="form-control mb-2" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <input className="form-control mb-2" type="number" placeholder="Teacher ID" value={teacherId} onChange={e => setTeacherId(Number(e.target.value))} />
        <input className="form-control mb-2" type="number" placeholder="Grade ID" value={gradeId} onChange={e => setGradeId(Number(e.target.value))} />
        <button className="btn btn-primary" onClick={handleAddAssignment}>Add Assignment</button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Teacher ID</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map(a => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.description}</td>
              <td>{a.teacher?.id}</td>
              <td>{a.grade?.name}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleUpdateAssignment(a)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDeleteAssignment(a.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assignments;