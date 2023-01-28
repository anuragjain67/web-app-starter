export const fetchTodos = (todoType, filter) => {
  let myTodos = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let othersTodos = [
    21, 22, 23, 24, 25, 26, 27, 28, 29, 210, 211, 212, 213, 214, 215, 216, 217,
    218, 219, 220,
  ];
  let displayTodos;
  if (todoType === "my") {
    displayTodos = myTodos;
  } else {
    displayTodos = othersTodos;
  }

  if (filter === 0) {
    return displayTodos.filter((x) => x % 2);
  } else if (filter === 1) {
    return displayTodos.filter((x) => x % 2 == false);
  } else {
    return displayTodos;
  }
};
