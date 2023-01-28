import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { Assignment, List, Task } from "@mui/icons-material";

export default function TodoFilter(props) {
  const { filter, setFilter } = props;

  const handleChange = (event, newValue) => {
    setFilter(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={filter} onChange={handleChange}>
          <Tab label="Todo" icon={<Assignment />} iconPosition="start" />
          <Tab label="Done" icon={<Task />} iconPosition="start" />
          <Tab label="All" icon={<List />} iconPosition="start" />
        </Tabs>
      </Box>
    </>
  );
}
