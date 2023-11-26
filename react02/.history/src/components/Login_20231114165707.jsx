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
        <input type="email" name="email" placeholder="Email..." />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit" onClick={() => handleLogin()}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
