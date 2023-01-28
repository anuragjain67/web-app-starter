import * as React from "react";
import { useKeycloak } from "@react-keycloak/web";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../assets/images/logo.png";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { keycloak } = useKeycloak();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <Box component="img" sx={{ height: 30 }} alt="logo" src={logo} />
          <Typography variant="h6"> AskMe </Typography>
        </Box>
        <Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          {!!keycloak.authenticated && (
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>{keycloak.tokenParsed.preferred_username}</MenuItem>
              <MenuItem onClick={() => keycloak.logout()}>Logout</MenuItem>
            </Menu>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
