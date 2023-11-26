import React from "react";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";

const Todo = () => {
  return (
    <div>
      <TodoForm todoName />
      <Todolist />
    </div>
  );
};

export default Todo;
