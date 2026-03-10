// client/src/api/teacherApi.js
import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/teachers";

// Get all teachers
export const getAllTeachers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/all`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch teachers:", error);
    throw error;
  }
};

// Create a new teacher
export const createTeacher = async (teacher) => {
  try {
    const res = await axios.post(`${BASE_URL}/add`, teacher);
    return res.data;
  } catch (error) {
    console.error("Failed to create teacher:", error);
    throw error;
  }
};

// Update a teacher
export const updateTeacher = async (id, teacher) => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, teacher);
    return res.data;
  } catch (error) {
    console.error("Failed to update teacher:", error);
    throw error;
  }
};

// Delete a teacher
export const deleteTeacher = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error("Failed to delete teacher:", error);
    throw error;
  }
};