import { default as settings } from "../config";
import * as actions from "../actions";

export default function todos(state = settings.INITIAL_STATES.todos, action) {
  switch (action.type) {
    case actions.SET_TODOS:
      return { ...state, todos: action.data };

    default:
      return state;
  }
}
