export const fetchTodos = (todoType, filter) => {

  let myTodos = [    
    {"id": 1, "title": "my todo", "description": "my todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 2, "title": "my todo", "description": "my todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 3, "title": "my todo", "description": "my todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 4, "title": "my todo", "description": "my todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 5, "title": "my todo", "description": "my todo description", "created_by": "admin", "modified_by": "admin", "status": "done"},
    {"id": 6, "title": "my todo", "description": "my todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 7, "title": "my todo", "description": "my todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 8, "title": "my todo", "description": "my todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 9, "title": "my todo", "description": "my todo description", "created_by": "admin", "modified_by": "admin", "status": "done"},
    {"id": 10, "title": "my todo", "description": "my todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"}
  ];

  let othersTodos = [    
    {"id": 11, "title": "other todo", "description": "other todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 12, "title": "other todo", "description": "other todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 13, "title": "other todo", "description": "other todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 14, "title": "other todo", "description": "other todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 15, "title": "other todo", "description": "other todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 16, "title": "other todo", "description": "other todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 17, "title": "other todo", "description": "other todo description", "created_by": "admin", "modified_by": "admin", "status": "done"},
    {"id": 18, "title": "other todo", "description": "other todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"},
    {"id": 19, "title": "other todo", "description": "other todo description", "created_by": "admin", "modified_by": "admin", "status": "done"},
    {"id": 20, "title": "other todo", "description": "other todo description", "created_by": "admin", "modified_by": "admin", "status": "todo"}
  ];
  let displayTodos;
  if (todoType === "my") {
    displayTodos = myTodos;
  } else {
    displayTodos = othersTodos;
  }

  if (filter === 0) {
    return displayTodos.filter((x) => x.status === "todo");
  } else if (filter === 1) {
    return displayTodos.filter((x) => x.status === "done");
  } else {
    return displayTodos;
  }
};


export const addTodo = (values) => {
  return {
    id: Date.now(),
    title: values.title,
    description: values.description,
    created_by: "admin",
    modified_by: "admin",
  };
};

export const editTodo = (values) => {
  return {
    id: values.id,
    title: values.title,
    description: values.description,
    created_by: "admin",
    modified_by: "admin",
  };
};

export const deleteTodo = (values) => {
  return values
};
