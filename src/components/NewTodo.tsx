import React, { useRef } from "react";
import classes from "@/components/NewTodo.module.css";

type Props = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<Props> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    props.onAddTodo(enteredText);
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
