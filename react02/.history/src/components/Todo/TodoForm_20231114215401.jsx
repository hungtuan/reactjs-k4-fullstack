import React, { useState } from "react";

const TodoForm = () => {
  // Hook
  const [form, setForm] = useState({
    name: "",
  });

  //   Handle
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name } = form;
    console.log(name);
    await handleRefeshSubmit();
  };

  const handleRefeshSubmit = async () => {
    setForm({ name: "" });
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tên công việc"
        onChange={handleChange}
        value={form.name}
      />
    </form>
  );
};

export default TodoForm;