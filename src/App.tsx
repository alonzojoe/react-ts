import NewTodo from "@/components/NewTodo";
import Todos from "@/components/Todos";
import Todo from "@/models/todo";
import "./App.css";

function App() {
  const todos = [
    new Todo("Learn TypeScript"),
    new Todo("Learn Type Alias / Definitions"),
  ];

  return (
    <>
      <h1>React TypeScript</h1>
      <NewTodo />
      <Todos items={todos} />
    </>
  );
}

export default App;
