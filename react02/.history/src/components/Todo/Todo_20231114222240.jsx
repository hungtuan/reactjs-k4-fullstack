import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";

const Todo = () => {
  const [name, setName] = useState({
    name: "",
  });
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
