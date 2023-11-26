import React from "react";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";

const Todo = () => {
  // Handle
  const handleGetTodo = (name) => {
    return name;
  };

  return (
    <div>
      <TodoForm onGetTodo={handleGetTodo} />
      <Todolist handleGetTodo />
    </div>
  );
};

export default Todo;
