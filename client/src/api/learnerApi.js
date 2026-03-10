import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/learners";

export const getAllLearners = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/all`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch learners:", error);
    throw error;
  }
};

export const createLearner = async (learner) => {
  try {
    const res = await axios.post(`${BASE_URL}/add`, learner);
    return res.data;
  } catch (error) {
    console.error("Failed to create learner:", error);
    throw error;
  }
};

export const updateLearner = async (id, learner) => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, learner);
    return res.data;
  } catch (error) {
    console.error("Failed to update learner:", error);
    throw error;
  }
};

export const deleteLearner = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error("Failed to delete learner:", error);
    throw error;
  }
};