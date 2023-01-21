import React from 'react';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { default as settings } from './config';
import keycloak from "./Keycloak";
import AppHeader from './components/AppHeader';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Todo from './components/todo/Todo';


// If using App2
import Home2 from './components/other/Home2';
import Login from './components/other/Login';
import ProtectedRoute from './ProtectedRoute';


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    text: {}
  },
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
      <ReactKeycloakProvider authClient={keycloak} initOptions={{
        onLoad: 'login-required'
      }}>
        <React.StrictMode>
          <ThemeProvider theme={theme}>
            <AppHeader />
            <BrowserRouter>
              <Routes>
                <Route
                  key="home"
                  path={settings.PAGE_URLS.Home}
                  element={
                    <Home />
                  }
                />
                <Route key="header" element={<NavBar />}>
                  <Route
                    key="todo"
                    path={settings.PAGE_URLS.Todos}
                    element={<Todo tab={0} />}
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
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