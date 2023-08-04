import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, toggleComplete, deleteToDo }) => {
  return (
    <div className="mt-2">
      {todos.map((todo, i) => (
        <ToDoItem
          key={i}
          todo={todo}
          toggleComplete={() => toggleComplete(i)}
          deleteToDo={() => deleteToDo(i)}
        />
      ))}
    </div>
  );
};

export default ToDoList;
