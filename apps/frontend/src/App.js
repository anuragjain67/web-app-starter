import React from 'react';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './ProtectedRoute';

function App1() {
  // Login required approach
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak} initOptions={{
        onLoad: 'login-required'
      }}>
        <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Home />
                }
              />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </ReactKeycloakProvider>
    </div>
  );
}

function App2() {
  // on button press open the login page
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute >
                    <Home />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </ReactKeycloakProvider>
    </div>
  );
}
// Comment App1 and uncomment App2 to view welcome page functionality.
export default App1;
// export default App2;