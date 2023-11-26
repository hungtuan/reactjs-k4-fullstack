import React from "react";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";

const Todo = () => {
  // Handle
  const handleGetTodo = (name) => {};

  return (
    <div>
      <TodoForm onGetTodo={handleGetTodo} />
      <Todolist />
    </div>
  );
};

export default Todo;
