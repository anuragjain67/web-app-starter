export const SET_TODOS = 'set_todos';
export const ADD_TODO = 'add_todo';

export const setTodos = (todos) => {
  return {
      type: SET_TODOS,
      data: todos
  }
}

export const addTodos = (todo) => {
  return {
      type: ADD_TODO,
      data: todo
  }
}

