import React, { useState } from "react";

const Login = () => {
  const [email, , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (email, password) => {
    console.log(email, password);
  };

  return (
    <div>
      <form action="">
        <input type="email" name="email" placeholder="Email..." value={email} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
        />
        <button type="submit" onClick={() => handleLogin(email, password)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
