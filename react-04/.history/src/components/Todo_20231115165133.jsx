import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "../core/hook";

const Todo = () => {
  const todoList = useSelector((state) => state.todoList);
  const [name, setName] = useState("");
  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Todo App</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name..." />
      </form>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
