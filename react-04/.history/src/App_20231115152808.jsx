import React from "react";

const App = () => {
  const handleIncrement = () => {};

  const handleDecrement = () => {};
  return (
    <div>
      <h1>userReducer</h1>
      <h1>Count: 0</h1>

      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default App;
