import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    const { email, password } = form;
    console.log(email, password);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          onChange={handleChange}
        />

        <input type="password" name="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
