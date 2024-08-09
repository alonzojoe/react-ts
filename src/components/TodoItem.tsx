import React from "react";
import classes from "@/components/TodoItem.module.css";
type Props = {
  id: string;
  text: string;
};

const TodoItem: React.FC<Props> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default TodoItem;
