export const SET_TODOS = 'set_todos';
export const ADD_TODO = 'add_todo';
export const EDIT_TODO = 'edit_todo';
export const DELETE_TODO = 'delete_todo';

export const setTodos = (todos) => {
  return {
      type: SET_TODOS,
      data: todos
  }
}

export const addTodo = (todo) => {
  return {
      type: ADD_TODO,
      data: todo
  }
}

export const editTodo = (todo) => {
  return {
      type: EDIT_TODO,
      data: todo
  }
}

export const deleteTodo = (todo) => {
  return {
      type: DELETE_TODO,
      data: todo
  }
}
