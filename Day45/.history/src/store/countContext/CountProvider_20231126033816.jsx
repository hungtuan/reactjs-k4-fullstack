import React, { useReducer } from "react";
import Context from "./CountContext";
import CountReducer from "./CountReducer";

function Provider({ children }) {
  const { initState, reducer } = CountReducer;

  const [state, dispatch] = useReducer(reducer, initState);
  console.log(initState);
  console.log(reducer);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
