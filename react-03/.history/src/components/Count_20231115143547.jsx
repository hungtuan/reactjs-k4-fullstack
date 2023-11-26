import React, { useContext, useState } from "react";
import { AppContext } from "../App";
const Count = () => {
  const { data } = useContext(AppContext);
  console.log(data);
  const [count, setCount] = useState(data.count);
  return (
    <div>
      <h1>Count: {data.count}</h1>
      <h2>{data.message}</h2>
      <button onClick={handleAdd}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Count;
