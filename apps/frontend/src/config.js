export const PAGE_URLS = {
    Home: '/',
    Todos: '/todos'
}

export const KEYCLOAK = {
    url: `${window.location.protocol}//${window.location.hostname}:8009/`,
    realm: "askme",
    clientId: "todo-webapp"
}  

const config = {
    PAGE_URLS,
    KEYCLOAK
};
  
export default config;