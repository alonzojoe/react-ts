import React from "react";
import TodoItem from "@/components/TodoItem";
import Todo from "@/models/todo";
import classes from "@/components/Todos.module.css";

type Props = {
  children?: React.ReactNode;
  items: Todo[];
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

const Todos: React.FC<Props> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          onToggle={props.toggleTodo.bind(null, item.id)}
          onRemoveTodo={props.removeTodo.bind(null, item.id)}
          id={item.id}
          text={item.text}
          completed={item.completed}
          key={`${item.id}-${item.text}`}
        />
      ))}
    </ul>
  );
};

export default Todos;
