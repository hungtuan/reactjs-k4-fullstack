import React from "react";

const Login = () => {
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
        <button
          type="submit"
          onClick={(value.email, value.password) => handleLogin(email, password)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
