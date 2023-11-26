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
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
