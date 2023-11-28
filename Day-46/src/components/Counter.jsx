import React, { useEffect, useLayoutEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  useLayoutEffect(() => {
    if (count === 5) {
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
