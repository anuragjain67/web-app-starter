import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Button,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../assets/images/logo.png";
import { default as settings } from "../config";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

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
          <Button
            varient="text"
            onClick={() => navigate(settings.PAGE_URLS.Home)}
            color="inherit"
            startIcon={
              <Box component="img" sx={{ height: 30 }} alt="logo" src={logo} />
            }
            sx={{
              "&:hover": {
                background: "none",
              },
            }}
          >
            <Typography variant="h6">AskMe</Typography>
          </Button>
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
