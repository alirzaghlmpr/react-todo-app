export const initialState = {
  todosList: [],
  labelsList: [],
};

export const actionTypes = {
  GET_TODOS: "GET_TODOS",
  GET_LABELS: "GET_LABELS",
  ENTER_TODO: "ENTER_TODO",
  ENTER_LABEL: "ETNER_LABEL",
  EDIT_TODO: "EDIT_TODO",
  SEARCH_TODO: "SEARCH_TODO",
  DELETE_TODO: "DELETE_TODO",
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
      };

    case actionTypes.ENTER_LABEL:
      return {
        ...state,
        labelsList: [action.payload.label, ...state.labelsList],
      };

    default:
      throw new Error("invalid action type");
  }
}
