import React, { useState } from "react";

const Login = () => {
  const [form, , setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (email, password) => {};

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    if (e.target.name === "email") {
      setForm((form) => form.email == e.target.value);
    } else if (e.target.name === "password") {
      setForm((form) => form.password == e.target.value);
    }
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
