import React, { useState } from "react";
import Todo from "@/models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (value: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (value: string) => {},
  removeTodo: (id: string) => {},
  toggleTodo: (id: string) => {},
});

type Props = {
  children?: React.ReactNode;
};

const TodosContextProvider: React.FC<Props> = ({ children }) => {
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

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodo,
    toggleTodo: toggleTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
