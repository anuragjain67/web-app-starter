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
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

import TodoFilter from "./TodoFilter";
import { CreateEditTodo } from "./CreateEditTodo";

import { default as settings } from "../../config";
import { fetchTodos, deleteTodo } from "../../resources";
import { setTodos, deleteTodo as deleteTodoAction } from "../../actions";


function TodoList(props) {
  const { todoType } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filter, setFilter] = useState(0);
  const todos = useSelector((state) => state.todos.todos);
  useEffect(() => {
    dispatch(setTodos(fetchTodos(todoType, filter)));
  }, [todoType, filter]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentTodoObj, setCurrentTodoObj] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event, value) => {
    setCurrentTodoObj(value);
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setCurrentTodoObj(null);
    setAnchorEl(null);
  };
  const [editModalOpen, setEditModalOpen] = useState(false);
  const handleEditModalClose = () => {
    setEditModalOpen(false);
    handleMenuClose();
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodoAction(deleteTodo(currentTodoObj)));
    handleMenuClose();
  };

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
          const labelId = `checkbox-list-label-${value.id}`;
          return (
            <ListItem
              key={value.id}
              dense
              sx={{
                "& .MuiListItemButton-root:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value.id) !== -1}
                    onChange={() => handleToggle(value.id)}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={`${value.title} ${value.id}`}
                  secondary={value.description}
                  onClick={() => handleTodoClick(value.id)}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={(event) => handleMenuClick(event, value)}>
                    <MoreVert />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItemButton>
            </ListItem>
          );
        })}
      </Stack>
      <MoreMenu
        open={openMenu}
        handleClose={handleMenuClose}
        handleEdit={() => {
          setEditModalOpen(true);
        }}
        handleDelete={handleDeleteTodo}
        anchorEl={anchorEl}
      />
      <CreateEditTodo open={editModalOpen} handleClose={handleEditModalClose} initialValues={currentTodoObj}/>
    </Box>
  );
}

const MoreMenu = (props) => {
  const { open, handleClose, handleEdit, handleDelete, anchorEl } = props;

  return (
    <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleEdit}>Edit</MenuItem>
      <MenuItem onClick={handleDelete}>Delete</MenuItem>
    </Menu>
  );
};
export default TodoList;
