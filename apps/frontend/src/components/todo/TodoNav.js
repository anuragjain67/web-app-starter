import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { Create, Group, Home } from "@mui/icons-material";

import { default as settings } from "../../config";

export default function TodoNav(props) {
  const { todoType, setTodoType } = props;
  const todoId = useParams()?.id;
  const navigate = useNavigate();

  useEffect(() => {
    if (todoId !== undefined) {
      navigate(settings.PAGE_URLS.Todos);
    }
  }, [todoType]);

  return (
    <Box
      flex={1}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Paper sx={{ p: 2 }}>
        <Button
          variant="contained"
          sx={{ mb: 2 }}
          size="large"
          startIcon={<Create />}
        >
          Create
        </Button>
        <List dense={true}>
          <ListItem
            disablePadding
            selected={todoType === "my"}
            onClick={() => setTodoType("my")}
          >
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="My Todos" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            selected={todoType === "others"}
            onClick={() => setTodoType("others")}
          >
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Others" />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}
