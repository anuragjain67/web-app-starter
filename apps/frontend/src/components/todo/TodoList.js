import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

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

import { default as settings } from "../../config";
import { setTodos } from "../../actions";
import { fetchTodos } from "../../resources";
import TodoFilter from "./TodoFilter";

function TodoList(props) {
  const { todoType } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filter, setFilter] = useState(0);

  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(setTodos(fetchTodos(todoType, filter)));
  }, [todoType, filter]);

  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleTodoClick = (value) => {
    navigate(settings.PAGE_URLS.TodoDetails.replace(":id", value));
  };

  return (
    <Box flex={5} ml={2}>
      <Box>
        <TodoFilter filter={filter} setFilter={setFilter}></TodoFilter>
      </Box>
      <Stack
        height={"calc( 100vh - 170px)"}
        sx={{
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        {todos.map((value, ind) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem key={value} dense>
              <ListItemButton onClick={() => handleTodoClick(value)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    onChange={() => handleToggle(value)}
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
