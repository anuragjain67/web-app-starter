import React from "react";
import { Navigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

const Login = () => {
  const { keycloak } = useKeycloak();

  if (keycloak.authenticated) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <h1>Welcome to todo app</h1>
      <p> Please login to continue </p>
      <button type="button" onClick={() => keycloak.login()}>
        Login
      </button>
    </div>
  );
};

export default Login;
