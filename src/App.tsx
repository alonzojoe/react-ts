import { useState } from "react";
import NewTodo from "@/components/NewTodo";
import Todos from "@/components/Todos";
import Todo from "@/models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log("App component is re-rendered");

  const addTodoHandler = (value: string) => {
    const newTodo = new Todo(value);
    setTodos((prevTodo) => [newTodo, ...prevTodo]);
  };

  return (
    <>
      <h1>React TypeScript</h1>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </>
  );
}

export default App;
