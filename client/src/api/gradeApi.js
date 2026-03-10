import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/grades";

export const getAllGrades = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch grades:", error);
    throw error;
  }
};

export const createGrade = async (grade) => {
  try {
    const res = await axios.post(BASE_URL, grade);
    return res.data;
  } catch (error) {
    console.error("Failed to create grade:", error);
    throw error;
  }
};

export const updateGrade = async (id, grade) => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, grade);
    return res.data;
  } catch (error) {
    console.error("Failed to update grade:", error);
    throw error;
  }
};

export const deleteGrade = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error("Failed to delete grade:", error);
    throw error;
  }
};