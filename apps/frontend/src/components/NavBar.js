import * as React from "react";
import { Link as RouterLink, Outlet } from "react-router-dom";

import { Typography, Link, Breadcrumbs, Box, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";

import { default as settings } from "../config";

export default function NavBar(props) {
  const title = props.title;
  return (
    <>
      <Paper elevation={2}>
        <Box sx={{ pt: 2, pl: 4, pb: 1 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              component={RouterLink}
              to={settings.PAGE_URLS.Home}
            >
              <HomeIcon sx={{ mr: 0.5 }} />
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="text.primary"
              >
                Home
              </Typography>
            </Link>

            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} />
              {title}
            </Typography>
          </Breadcrumbs>
        </Box>
      </Paper>
      <Box m={2}>
        <Outlet />
      </Box>
    </>
  );
}
