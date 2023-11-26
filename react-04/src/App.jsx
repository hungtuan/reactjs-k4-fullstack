import Counter from "./components/Counter";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div>
      <h1>useReducer + Context API</h1>
      <Counter />

      <Todo />
    </div>
  );
}
