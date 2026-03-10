import axios from "axios";

const BASE_URL = "http://localhost:8080/api/assignments";

export const getAssignments = () => {
  return axios.get(BASE_URL);
};

export const addAssignment = (assignment) => {
  return axios.post(BASE_URL, assignment);
};