import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8009/",
 realm: "askme",
 clientId: "todo-webapp",
});

export default keycloak;
