// import Todo from "./components/Todo";
import { createContext } from "react";

function App() {
  const AppContext = createContext();
  console.log(AppContext);
  return <h1>App</h1>;
}

export default App;
