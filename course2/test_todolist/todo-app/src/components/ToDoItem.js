import React from "react";

const ToDoItem = ({ todo, toggleComplete, deleteToDo }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-2 w-100">
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          className="mr-3 custom-checkbox"
          checked={todo.complete}
          onChange={toggleComplete}
        />
        <span
          className={todo.complete ? "completed task-content" : "task-content"}
        >
          {todo.task}
        </span>
      </div>
      <button
        className="btn btn-danger btn-sm delete-button"
        onClick={deleteToDo}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
