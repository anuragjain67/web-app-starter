import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import store from "./store";
import { default as settings } from "./config";
import keycloak from "./Keycloak";

import AppHeader from "./components/AppHeader";
import Home from "./components/Home";
import Todo from "./components/todo/Todo";

// If using App2
import Home2 from "./components/other/Home2";
import Login from "./components/other/Login";
import ProtectedRoute from "./ProtectedRoute";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

function App1() {
  // Login required approach
  return (
    <div>
      <Provider store={store}>
        <ReactKeycloakProvider
          authClient={keycloak}
          initOptions={{
            onLoad: "login-required",
          }}
        >
          <React.StrictMode>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <AppHeader />
                <Routes>
                  <Route
                    key="home"
                    path={settings.PAGE_URLS.Home}
                    element={<Home />}
                  />
                  <Route key="header">
                    <Route
                      key="todo"
                      path={settings.PAGE_URLS.Todos}
                      element={<Todo tab={0} />}
                    />
                    <Route
                      key="tododetail"
                      path={settings.PAGE_URLS.TodoDetails}
                      element={<Todo tab={0} />}
                    />
                  </Route>
                </Routes>
              </BrowserRouter>
            </ThemeProvider>
          </React.StrictMode>
        </ReactKeycloakProvider>
      </Provider>
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
                  <ProtectedRoute>
                    <Home2 />
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
