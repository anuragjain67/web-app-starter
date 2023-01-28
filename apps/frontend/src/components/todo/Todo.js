import { useState } from "react";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";

import TodoList from "./TodoList";
import TodoNav from "./TodoNav";
import TodoDetails from "./TodoDetails";

export default function Todo() {
  const [todoType, setTodoType] = useState("my");
  const todoId = useParams()?.id;

  return (
    <Stack direction="row" m={2}>
      <TodoNav todoType={todoType} setTodoType={setTodoType}/>
      {todoId !== undefined && <TodoDetails/>}
      {todoId === undefined && <TodoList todoType={todoType} />}
    </Stack>
  );
}
