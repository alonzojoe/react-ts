import React, { useRef, useContext } from "react";
import { TodosContext } from "@/store/todos-context";
import classes from "@/components/NewTodo.module.css";

// type Props = {
//   onAddTodo: (text: string) => void;
// };

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    todosCtx.addTodo(enteredText);
    todoInputRef.current!.value = "";
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="text">New Todo :</label>
      <input ref={todoInputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
