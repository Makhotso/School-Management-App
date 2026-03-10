import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/assignments";

export const getAllAssignments = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch assignments:", error);
    throw error;
  }
};

export const createAssignment = async (assignment) => {
  try {
    const res = await axios.post(BASE_URL, assignment);
    return res.data;
  } catch (error) {
    console.error("Failed to create assignment:", error);
    throw error;
  }
};

export const updateAssignment = async (id, assignment) => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, assignment);
    return res.data;
  } catch (error) {
    console.error("Failed to update assignment:", error);
    throw error;
  }
};

export const deleteAssignment = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error("Failed to delete assignment:", error);
    throw error;
  }
};