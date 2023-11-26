import React, { useEffect, useState } from "react";

const Todolist = ({ todo }) => {
  // Hook
  let i = useEffect(() => {
    console.log("Hello");
  }, [todo]);

  console.log(i);
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
      {todo ? (
        <li>
          <input type="checkbox" />
          <span>{todo}</span>
        </li>
      ) : null}
    </ul>
  );
};

export default Todolist;
