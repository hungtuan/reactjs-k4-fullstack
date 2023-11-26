import React, { useReducer } from "react";
import Context from "./CountContext";

import { initState } from "./CountReducer";
import { reducer } from "./CountReducer";

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
