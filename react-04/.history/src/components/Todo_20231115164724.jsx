import React, { useContext } from "react";
import { useDispatch, useSelector } from "../core/hook";

const Todo = () => {
  const todoList = useSelector((state) => state.todoList);
  console.log(todoList);
  return (
    <div>
      <h2>Todo App</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default Todo;
