import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Stack,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";

import { setTodos } from "../../actions";
import { fetchTodos } from "../../resources";
import TodoFilter from "./TodoFilter";

function TodoList(props) {
  const { todoType } = props;

  const [filter, setFilter] = useState(0);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(setTodos(fetchTodos(todoType, filter)));
  }, [todoType, filter]);

  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box flex={5}>
      <Box>
        <TodoFilter filter={filter} setFilter={setFilter}></TodoFilter>
      </Box>
      <Stack
        height={"calc( 100vh - 220px)"}
        sx={{
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        {todos.map((value, ind) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem key={value} disablePadding>
              <ListItemButton onClick={handleToggle(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${value}`} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItemButton>
            </ListItem>
          );
        })}
      </Stack>
    </Box>
  );
}

export default TodoList;
