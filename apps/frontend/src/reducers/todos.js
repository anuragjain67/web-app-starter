import { default as settings } from "../config";
import * as actions from "../actions";

export default function todos(state = settings.INITIAL_STATES.todos, action) {
  switch (action.type) {
    case actions.SET_TODOS:
      return { ...state, todos: action.data };

    case actions.ADD_TODO:
      return { ...state, todos: [action.data, ...state.todos] };

    case actions.EDIT_TODO:
      return {
        ...state,

        todos: state.todos.map((todo) => {
          todo =
            todo.id === action.data.id ? { ...todo, ...action.data } : todo;
          return todo;
        }),
      };
    case actions.DELETE_TODO:

      let id = action.data['id'];
      let temp = [...state.todos]
      const ind = state.todos.map(item => item.id).indexOf(id);
      temp.splice(ind, 1);
       
      return {
        ...state,
        todos: temp
      };
  
    default:
      return state;
  }
}
