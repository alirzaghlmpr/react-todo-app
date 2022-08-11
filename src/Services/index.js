import axios from "axios";

const port = 3001;
axios.defaults.baseURL = `http://localhost:${port}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

export function getTodos() {
  return axios
    .get("/todos")
    .then((response) => response.data)
    .catch((error) => error.message);
}

export function getLabels() {
  return axios
    .get("/labels")
    .then((response) => response.data)
    .catch((error) => error.message);
}

export function postTodo(data) {
  return axios
    .post("/todos", data)
    .then((response) => response.data)
    .catch((error) => error.message);
}
