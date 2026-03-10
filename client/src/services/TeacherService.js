import axios from "axios";

const BASE_URL = "http://localhost:8080/api/teachers";

export const getTeachers = () => {
  return axios.get(BASE_URL);
};

export const addTeacher = (teacher) => {
  return axios.post(BASE_URL, teacher);
};