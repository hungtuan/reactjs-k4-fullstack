import React, { useEffect, useState } from "react";
let a = 0;
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    //
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  if (count >= 10) {
    a = 11;
  }

  useEffect(() => {
    console.log("effect:" + count);
  }, [a]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
