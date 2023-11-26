// import Todo from "./components/Todo";
import { createContext, useEffect, useState } from "react";
import Count from "./components/Count";
export const AppContext = createContext();

function App() {
  const message = "";

  // Hook
  const [count, setCount] = useState(0);

  if (count >= 3) {
    message = "Học lập trình không khó";
  }

  useEffect(() => {}, message);

  //Handle
  const handle = (type) => {
    if (type === "inc") {
      setCount((count) => count - 1);
    }
    if (type === "add") {
      setCount((count) => count + 1);
    }
  };

  return (
    <AppContext.Provider
      value={{
        data: {
          count,
          message,
        },
        handle,
      }}
    >
      <div>
        <h1>Context API</h1>
        <Count />
      </div>
    </AppContext.Provider>
  );
}

export default App;
