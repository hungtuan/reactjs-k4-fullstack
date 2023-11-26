// import Todo from "./components/Todo";
import { createContext } from "react";
import Count from "./components/Count";
export const AppContext = createContext();

function App() {
  const count = 0;
  const message = "Học lập trình không khó";
  return (
    <AppContext.Provider
      value={{
        data: {
          count,
          message,
        },
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
