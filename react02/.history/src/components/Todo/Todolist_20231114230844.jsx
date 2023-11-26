import React, { useEffect, useState } from "react";

const Todolist = ({ todo: todos }) => {
  // Hook
  let todoList = [];

  useEffect(() => {
    console.log(todos);
    todoList.push(todos);
  }, [todos]);

  console.log(todoList);
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
      {/* {todos.map((todo) => {
        <li>
          <input type="checkbox" />
          <span>{todo}</span>
        </li>;
      })} */}
    </ul>
  );
};

export default Todolist;
