import React, { useContext } from "react";
import { useDispatch } from "../core/hook";

const Todo = () => {
  const state = useSelector();
  console.log(state);
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
