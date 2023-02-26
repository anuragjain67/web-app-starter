import { useState } from "react";
import { useParams } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { Stack } from "@mui/material";

import TodoList from "./TodoList";
import TodoNav from "./TodoNav";
import TodoDetails from "./TodoDetails";

export default function Todo() {
  const { keycloak } = useKeycloak();
  return (
      <>
      {
          !!keycloak.authenticated && 
          
          (
              <_Todo> </_Todo>
          )
      }
      </>
  )
}


function _Todo() {
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
