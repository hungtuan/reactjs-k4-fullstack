import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";

const Todo = () => {
  const [todo, setTodo] = useState({
    name: "",
  });

  // Handle
  const handleGetTodo = (name) => {
    setTodo({ ...todo, name: name });
  };

  return (
    <div>
      <TodoForm onGetTodo={handleGetTodo} />
      <Todolist todo={todo.name} />
    </div>
  );
};

export default Todo;
