import React from "react";
import classes from "@/components/TodoItem.module.css";
type Props = {
  id: string;
  text: string;
  completed: boolean;
  onRemoveTodo: () => void;
  onToggle: () => void;
};

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li id={props.id} className={classes.item}>
      <span
        className={props.completed ? classes.done : ""}
        onClick={props.onRemoveTodo}
      >
        {props.text}
      </span>{" "}
      <button
        className={props.completed ? classes.danger : classes.plain}
        onClick={props.onToggle}
      >
        {props.completed ? "Undo" : "Mark as Done"}
      </button>
    </li>
  );
};

export default TodoItem;
