import React, { useContext } from "react";
import { AppContext } from "../App";
const Count = () => {
  const { data } = useContext(AppContext);
  console.log(data);
  return (
    <div>
      <h1>Count: {data.count}</h1>
      <h2>{data.message}</h2>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

export default Count;
