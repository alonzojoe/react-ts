import React from "react";
import TodoItem from "@/components/TodoItem";
import Todo from "@/models/todo";

type Props = {
  children?: React.ReactNode;
  items: Todo[];
};

const Todos: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          id={item.id}
          text={item.text}
          key={`${item.id}-${item.text}`}
        />
      ))}
    </ul>
  );
};

export default Todos;
