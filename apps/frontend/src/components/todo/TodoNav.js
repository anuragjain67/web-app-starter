import { Group, Home } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function TodoNav(props) {
  const {todoType, setTodoType} = props;
  return (
    <Box
      flex={1}
      sx={{
        display: { xs: "none", sm: "block" },
        width: "100%",
        maxWidth: 360,
      }}
    >
      <List>
        <ListItem disablePadding selected={todoType==="my"} onClick={() => setTodoType("my")}>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="My Todos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding selected={todoType==="others"} onClick={() => setTodoType("others")}>
          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Others" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
