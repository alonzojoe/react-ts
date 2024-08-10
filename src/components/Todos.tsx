import React, { useContext } from "react";
import { TodosContext } from "@/store/todos-context";
import TodoItem from "@/components/TodoItem";
import classes from "@/components/Todos.module.css";

// type Props = {
//   children?: React.ReactNode;
//   items: Todo[];
//   removeTodo: (id: string) => void;
//   toggleTodo: (id: string) => void;
// };

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          id={item.id}
          text={item.text}
          completed={item.completed}
          key={`${item.id}-${item.text}`}
          onToggle={todosCtx.toggleTodo.bind(null, item.id)}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
