// import Todo from "./components/Todo";
import { createContext } from "react";
import Count from "./components/Count";
export const AppContext = createContext();

function App() {
  const count = 0;
  return (
    <AppContext.Provider value={count}>
      <div>
        <h1>Context API</h1>
        <Count />
      </div>
    </AppContext.Provider>
  );
}

export default App;
