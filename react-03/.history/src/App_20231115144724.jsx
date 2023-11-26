// import Todo from "./components/Todo";
import { createContext, useState } from "react";
import Count from "./components/Count";
export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const handle = (type) => {
    if (type === "inc") {
      setCount((count) => count - 1);
    }
    if (type === "add") {
      setCount((count) => count + 1);
    }
  };

  const message = "Học lập trình không khó";
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
