import React from "react";
import { AppContext } from "../App";
const Count = () => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <div>
            <h1>Count: 0</h1>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Count;
