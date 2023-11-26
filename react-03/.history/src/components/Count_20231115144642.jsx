import React, { useContext, useState } from "react";
import { AppContext } from "../App";
const Count = () => {
  const { data, handle } = useContext(AppContext);

  return (
    <div>
      <h1>Count: {data.count}</h1>
      <h2>{data.message}</h2>
      <button onClick={() => handle("inc")}>-</button>
      <button onClick={() => handle("add")}>+</button>
    </div>
  );
};

export default Count;
