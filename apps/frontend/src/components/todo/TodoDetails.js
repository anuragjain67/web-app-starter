import { useNavigate, useParams } from "react-router-dom";

import { ArrowBack } from "@mui/icons-material";
import { Box, Divider, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { default as settings } from "../../config";

export default function TodoDetails() {
  const navigate = useNavigate();
  const todoId = useParams()?.id;
  return (
    <Box flex={5} ml={2}>
      <Paper >
        <Box sx={{pl: 1}}>
          <IconButton onClick={() => navigate(settings.PAGE_URLS.Todos)}>
            <ArrowBack/>
          </IconButton>
        </Box>
        <Divider/>
        <Stack
          height={"calc( 100vh - 170px)"}
          sx={{
            overflow: "hidden",
            overflowY: "scroll",
            p: 2
          }}
        >
          <Typography>List Item {todoId}</Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
