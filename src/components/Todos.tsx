import React from "react";
import TodoItem from "@/components/TodoItem";
import Todo from "@/models/todo";
import classes from "@/components/Todos.module.css";

type Props = {
  children?: React.ReactNode;
  items: Todo[];
  removeTodo: (id: string) => void;
};

const Todos: React.FC<Props> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          onRemoveTodo={props.removeTodo}
          id={item.id}
          text={item.text}
          key={`${item.id}-${item.text}`}
        />
      ))}
    </ul>
  );
};

export default Todos;
