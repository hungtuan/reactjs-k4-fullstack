import React, { useState } from "react";

const TodoForm = () => {
  // Hook
  const [form, setForm] = useState({
    name: "",
  });

  //   Handle
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = form;
    console.log(email, password);
    setForm({ name: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="Tên công việc" onChange={handleChange} />
    </form>
  );
};

export default TodoForm;
