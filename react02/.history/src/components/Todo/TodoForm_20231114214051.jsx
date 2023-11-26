import React, { useState } from "react";

const TodoForm = () => {
  // Hook
  const [form, setForm] = useState({
    name: "",
  });

  return (
    <form action="">
      <input type="text" placeholder="Tên công việc" />
    </form>
  );
};

export default TodoForm;
