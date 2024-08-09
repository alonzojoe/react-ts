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

  const removeTodo = (id: string) => {
    setTodos((todos) => todos.filter((item) => item.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      }))
    );
  };

  return (
    <>
      <h1>React TypeScript</h1>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos toggleTodo={toggleTodo} removeTodo={removeTodo} items={todos} />
    </>
  );
}

export default App;
