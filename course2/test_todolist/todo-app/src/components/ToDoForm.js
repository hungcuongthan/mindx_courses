import React, { useState } from "react";

const ToDoForm = ({ addToDo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addToDo(task);
      setTask("");
    }
  };

  return (
    <div className="w-100">
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          type="text"
          className="form-control mr-2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task"
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
