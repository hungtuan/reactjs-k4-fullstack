import React, { useState } from "react";

const TodoForm = () => {
  // Hook
  const [form, setForm] = useState({
    name: "",
  });

  //   Handle
  const handleSubmit = () => {};

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="Tên công việc" onChange={handleChange} />
    </form>
  );
};

export default TodoForm;
