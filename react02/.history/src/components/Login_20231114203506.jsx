import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    console.log(email, password);
    await handleRefeshSubmit();
  };

  const handleRefeshSubmit = async () => {
    setForm({ email: "", password: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { email, password } = form;
  console.log(email, password);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
          />
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
