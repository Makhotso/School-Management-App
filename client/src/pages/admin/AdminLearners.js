import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllLearners, createLearner, updateLearner, deleteLearner } from '../../api/learnerApi';

import AdminTeachers from "./AdminTeachers";
import AdminGrades from "./AdminGrades";
import AdminAssignments from "./AdminAssignments";

const Learners = () => {
  const navigate = useNavigate();
  const [learners, setLearners] = useState([]);
  const [fullName, setFullName] = useState('');
  const [birthId, setBirthId] = useState('');
  const [gradeId, setGradeId] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { fetchLearners(); }, []);

  const fetchLearners = async () => {
    setLoading(true);
    try {
      const data = await getAllLearners();
      setLearners(data);
    } catch { setError("Failed to load learners."); }
    finally { setLoading(false); }
  };

  const handleAddLearner = async () => {
    if (!fullName || !birthId) return alert("All fields are required.");
    try { await createLearner({ fullName, birthId, grade: { id: gradeId } }); setFullName(''); setBirthId(''); fetchLearners(); }
    catch { alert("Error adding learner."); }
  };

  const handleUpdateLearner = async (l) => {
    const newName = prompt("New full name:", l.fullName);
    if (!newName) return;
    try { await updateLearner(l.id, { ...l, fullName: newName }); fetchLearners(); }
    catch { alert("Error updating learner."); }
  };

  const handleDeleteLearner = async (id) => {
    if (!window.confirm("Delete this learner?")) return;
    try { await deleteLearner(id); fetchLearners(); }
    catch { alert("Error deleting learner."); }
  };

  if (loading) return <p>Loading learners...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      {/* Back Button */}
      <button className="btn btn-secondary mb-3" onClick={() => navigate('/dashboard')}>
        ← Back to Dashboard
      </button>

      <h1>Learners</h1>
      <div className="mb-3">
        <input className="form-control mb-2" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />
        <input className="form-control mb-2" placeholder="Birth ID" value={birthId} onChange={e => setBirthId(e.target.value)} />
        <input className="form-control mb-2" type="number" placeholder="Grade ID" value={gradeId} onChange={e => setGradeId(Number(e.target.value))} />
        <button className="btn btn-primary" onClick={handleAddLearner}>Add Learner</button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Roll Number</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {learners.map(l => (
            <tr key={l.id}>
              <td>{l.fullName}</td>
              <td>{l.rollNumber}</td>
              <td>{l.grade?.name}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleUpdateLearner(l)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDeleteLearner(l.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Learners;