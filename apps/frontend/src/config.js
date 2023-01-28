export const PAGE_URLS = {
  Home: "/",
  Todos: "/todos",
  TodoDetails: "/todos/:id",
};

export const KEYCLOAK = {
  url: `${window.location.protocol}//${window.location.hostname}:8009/`,
  realm: "askme",
  clientId: "todo-webapp",
};

export const INITIAL_STATES = {
  todos: {
    todos: [],
    currentTodo: {},
  },
};

const config = {
  PAGE_URLS,
  KEYCLOAK,
  INITIAL_STATES,
};

export default config;
