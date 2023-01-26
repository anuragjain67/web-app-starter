import { Stack } from "@mui/material";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoNav from "./TodoNav";

export default function Todo() {
  const [todoType, setTodoType] = useState("my");

  return (
    <Stack direction="row">
      <TodoNav todoType={todoType} setTodoType={setTodoType}/>
      <TodoList todoType={todoType}/>
    </Stack>
  );
}