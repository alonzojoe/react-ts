import React, { useRef } from "react";

const NewTodo = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInputRef.current?.value;

    console.log("Emtered Text:", enteredText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo Text:</label>
      <input ref={todoInputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
