import React, { useContext } from "react";
import { ProviderContext } from "../core/Provider";

export default function Counter() {
  const { state, dispatch } = useContext(ProviderContext);
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
    });
  };
  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
    });
  };
  return (
    <div>
      <h1>useReducer</h1>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
