import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
const Count = () => {
  const { data, handle } = useContext(AppContext);
  const arr = [
    ["name", "Hoàng An"],
    ["email", "hoangan.web@gmail.com"],
    ["age", 31],
  ];

  console.log(arr);
  arr.reduce((prev, curr) => {
    prev[curr[0]] = curr[0];
    // return inc.curr;
  }, {});
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
