import React, { useReducer } from "react";
import CountContext from "./CountContext";
import CountReducer from "./CountReducer";

function Provider({ children }) {
  const { initState, reducer } = CountReducer;

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CountContext.Provider value={[state, dispatch]}>
      {children}
    </CountContext.Provider>
  );
}

export default Provider;
