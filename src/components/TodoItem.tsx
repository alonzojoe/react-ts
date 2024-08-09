import React from "react";

type Props = {
  id: string;
  text: string;
};

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li>
      <span>{props.id}</span> <b>{props.text}</b>
    </li>
  );
};

export default TodoItem;
