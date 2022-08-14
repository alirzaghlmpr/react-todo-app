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

export function postLabel(data) {
  return axios
    .post("/labels", data)
    .then((response) => response.data)
    .catch((error) => error.message);
}

export function searchTodo(stringQuery, label) {
  return axios
    .get(
      `/todos?todo_like=${stringQuery}${
        label === "all" ? "" : `&label=${label}`
      }`
    )
    .then((response) => response.data)
    .catch((error) => error.message);
}

export function deleteTodo(id) {
  return axios
    .delete(`/todos/${id}`)
    .then((response) => response.data)
    .catch((error) => error.message);
}

export function deleteLabel(id) {
  return axios
    .delete(`/labels/${id}`)
    .then((response) => response.data)
    .catch((error) => error.message);
}

export function updateTodo(data) {
  return axios
    .put(`/todos/${data.id}`, data)
    .then((response) => response.data)
    .catch((error) => error.message);
}

export function updateLabel(data) {
  return axios
    .put(`/labels/${data.id}`, data)
    .then((response) => response.data)
    .catch((error) => error.message);
}
