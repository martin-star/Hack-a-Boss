import axios from "axios";

const BASE_URL = "https://5dda901c5730550014fe78e2.mockapi.io/api/v1";

export function getTasks() {
  return axios.get(`${BASE_URL}/todo`);
}

export function addTask(task) {
  return axios.post(`${BASE_URL}/todo`, { ...task });
}

export function updateTask(task) {
  return axios.put(`${BASE_URL}/todo/${task.id}`, { ...task });
}

export function removeTask(id) {
  return axios.delete(`${BASE_URL}/todo/${id}`);
}
