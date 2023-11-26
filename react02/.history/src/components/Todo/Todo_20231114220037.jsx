import React from "react";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";

const Todo = () => {
  return (
    <div>
      <TodoForm todo />
      <Todolist />
    </div>
  );
};

export default Todo;
