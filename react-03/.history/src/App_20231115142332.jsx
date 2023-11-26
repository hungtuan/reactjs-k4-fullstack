// import Todo from "./components/Todo";
import { createContext } from "react";
import Count from "./components/Count";
function App() {
  const AppContext = createContext();

  return (
    <AppContext.Provider>
      <div>
        <h1>Context API</h1>
        <Count />
      </div>
    </AppContext.Provider>
  );
}

export default App;
