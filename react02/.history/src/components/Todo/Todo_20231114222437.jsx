import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";

const Todo = () => {
  const [todo, setTodo] = useState({
    name: "",
  });
  const { name } = todo;
  console.log(name);
  // Handle
  const handleGetTodo = (name) => {
    setTodo({ ...todo, name: name });
  };

  return (
    <div>
      <TodoForm onGetTodo={handleGetTodo} />
      <Todolist handleGetTodo />
    </div>
  );
};

export default Todo;
