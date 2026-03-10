import axios from "axios";

const BASE_URL = "http://localhost:8080/api/learners";

export const getLearners = () => {
  return axios.get(BASE_URL);
};

export const addLearner = (learner) => {
  return axios.post(BASE_URL, learner);
};

export const deleteLearner = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};