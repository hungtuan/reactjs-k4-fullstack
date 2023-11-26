import React, { useContext, useState } from "react";
import { AppContext } from "../App";
const Count = () => {
  const { data } = useContext(AppContext);
  console.log(data);
  const [count, setCount] = useState(data.count);
  const handleInc = () => {
    setCount((count) => {
      count - 1;
    });
  };

  const handleAdd = () => {
    setCount((count) => {
      count + 1;
    });
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>{data.message}</h2>
      <button onClick={handleInc}>-</button>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default Count;
