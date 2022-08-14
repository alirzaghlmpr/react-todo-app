export const initialState = {
  todosList: [],
  labelsList: [],
  todoQuery: null,
  activeLabel: null,
  toast: { type: null, message: null },
};

export const actionTypes = {
  GET_TODOS: "GET_TODOS",
  GET_LABELS: "GET_LABELS",
  ENTER_TODO: "ENTER_TODO",
  ENTER_LABEL: "ETNER_LABEL",
  EDIT_TODO: "TOGGLE_TODO",
  SEARCH_TODO: "SEARCH_TODO",
  DELETE_TODO: "DELETE_TODO",
  DELETE_LABEL: "DELETE_LABEL",
  UPDATE_TODO: "UPDATE_TODO",
  UPDATE_LABEL: "UPDATE_LABEL",
};

export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.GET_TODOS:
      return {
        ...state,
        todosList: action.payload.response.reverse(),
      };

    case actionTypes.GET_LABELS:
      return {
        ...state,
        labelsList: action.payload.response.reverse(),
      };

    case actionTypes.ENTER_TODO:
      return {
        ...state,
        todosList: [action.payload.todo, ...state.todosList],
        toast: {
          type: "success",
          message: `${action.payload.todo.todo} added successfully!`,
        },
      };

    case actionTypes.ENTER_LABEL:
      return {
        ...state,
        labelsList: [action.payload.label, ...state.labelsList],
        toast: {
          type: "success",
          message: `${action.payload.label.label} added successfully!`,
        },
      };

    case actionTypes.SEARCH_TODO:
      return {
        ...state,
        todoQuery: action.payload.query,
        activeLabel: action.payload.label,
      };

    case actionTypes.DELETE_TODO:
      let prevTodos = [...state.todosList];

      return {
        ...state,
        todosList: prevTodos.filter(
          (item) => item.id !== action.payload.data.id
        ),
        toast: {
          type: "error",
          message: `${action.payload.data.todo} deleted successfully!`,
        },
      };

    case actionTypes.DELETE_LABEL:
      let prevLabels = [...state.labelsList];

      return {
        ...state,
        labelsList: prevLabels.filter(
          (item) => item.id !== action.payload.data.id
        ),
        toast: {
          type: "error",
          message: `${action.payload.data.label} deleted successfully!`,
        },
      };

    case actionTypes.UPDATE_TODO:
      let todos = [...state.todosList];

      todos[todos.findIndex((item) => item.id === action.payload.data.id)] =
        action.payload.data;
      return {
        ...state,
        todosList: todos,
        toast: {
          type: "info",
          message: `${action.payload.data.todo} changed successfully to ${
            action.payload.data.isDone ? "done" : "undone"
          }!`,
        },
      };

    case actionTypes.UPDATE_LABEL:
      let labels = [...state.labelsList];

      labels[labels.findIndex((item) => item.id === action.payload.data.id)] =
        action.payload.data;
      return {
        ...state,
        labelsList: labels,
      };
    default:
      throw new Error("invalid action type");
  }
}
