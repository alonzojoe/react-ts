import React from "react";
import classes from "@/components/TodoItem.module.css";
type Props = {
  id: string;
  text: string;
  onRemoveTodo: (id: string) => void;
};

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li
      onClick={() => props.onRemoveTodo(props.id)}
      id={props.id}
      className={classes.item}
    >
      {props.text}
    </li>
  );
};

export default TodoItem;
