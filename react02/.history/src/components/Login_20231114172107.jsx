import React, { useState } from "react";

const Login = () => {
  const [form, , setForm] = useState({
    email: "",
    password: "",
  });
  console.log(form);
  const handleSubmit = (email, password) => {};

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form action="" onSubmit={() => handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
