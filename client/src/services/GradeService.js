import axios from "axios";

const BASE_URL = "http://localhost:8080/api/grades";

export const getGrades = () => {
  return axios.get(BASE_URL);
};

export const addGrade = (grade) => {
  return axios.post(BASE_URL, grade);
};