import React, { useEffect, useState } from "react";

const Todolist = ({ todo: todos }) => {
  // Hook
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  useEffect(() => {
    setTodoList([todos]);
  }, [todos]);

  return (
    <ul>
      <li>
        <input type="checkbox" />
        <span>Công việc 1</span>
      </li>
      <li>
        <input type="checkbox" />
        <span>Công việc 2</span>
      </li>
      <li>
        <input type="checkbox" />
        <span>Công việc 3</span>
      </li>
      {/* {todoList.map((todo, index) => {
        <li key={index}>
          <input type="checkbox" />
          <span>{todo}</span>
        </li>;
      })} */}
    </ul>
  );
};

export default Todolist;
