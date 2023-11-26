import React, { useEffect } from "react";

const Todolist = ({ todo }) => {
  // Hook
  const [todo, setTodo] = useState({
    name: "",
  });

  setTodo({ ...todo, name: todo });
  const { name } = todo;
  console.log(name);

  useEffect(() => {}, todo);
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
