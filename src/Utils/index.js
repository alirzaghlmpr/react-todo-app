import { v4 as uuid } from "uuid";
import { getTodos, getLabels } from "../Services";
import { actionTypes } from "../Reducer";

export function appInit(dispatch) {
  Promise.all([
    getTodos().then((response) =>
      dispatch({ type: actionTypes.GET_TODOS, payload: { response } })
    ),
    getLabels().then((response) =>
      dispatch({ type: actionTypes.GET_LABELS, payload: { response } })
    ),
  ]);
}

export function createUniqueId() {
  return uuid().slice(0, 8);
}

export function createTodo(data) {
  let { todo, label } = data;

  return {
    todo: todo,
    label: label,
    id: createUniqueId(),
    date: new Date().toLocaleString(),
    isDone: false,
  };
}

export function createLabel(data) {
  let { label, count } = data;

  return {
    label: label,
    count: count,
    id: createUniqueId(),
  };
}

export function findLabel(label, list) {
  return list.find((item) => item.label === label);
}
