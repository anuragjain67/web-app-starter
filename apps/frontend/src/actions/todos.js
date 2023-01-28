export const SET_TODOS = 'set_todos';
export const SET_CURRENT_TODO = 'set_current_todo';


export const setTodos = (todos) => {
  return {
      type: SET_TODOS,
      data: todos
  }
}

export const setCurrentTodo = (todo) => {
  return {
      type: SET_CURRENT_TODO,
      data: todo
  }
}
