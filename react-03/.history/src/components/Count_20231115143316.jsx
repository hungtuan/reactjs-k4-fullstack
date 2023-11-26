import React, { useContext } from "react";
import { AppContext } from "../App";
const Count = () => {
  const { data } = useContext(AppContext);
  console.log(data);
  return (
    <div>
      <h1>Count: {}</h1>
    </div>
  );
};

export default Count;
