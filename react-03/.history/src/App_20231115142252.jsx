// import Todo from "./components/Todo";
import { createContext } from "react";

function App() {
  const AppContext = createContext();

  return (
    <AppContext>
      <div>
        <h1>Context API</h1>
        <Count />
      </div>
    </AppContext>
  );
}

export default App;
