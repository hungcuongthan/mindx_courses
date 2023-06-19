import React, { useState, useEffect } from "react";

// Initial to-do-list task list
const TaskList = () => {
  // I'm using useState to initiate tasks, newly added task, and task counter's value
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskCounter, setTaskCounter] = useState(0);

  // This useEffect will be run after the tasks list being updated and update the number of tasks left to be done
  useEffect(() => {
    setTaskCounter(tasks.filter((task) => !task.completed).length);
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask === "") return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([task, ...tasks]);
    setNewTask("");
  };

  const completeTask = (id) => {
    setTasks(
      tasks
        .map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
        .sort((a, b) => a.completed - b.completed)
    );
  };

  return (
    <div className="App">
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter your task here"
          style={{
            border: "none",
            borderBottom: "1px solid black",
            marginBottom: "20px",
          }}
        />
      </form>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
          >
            <label
              style={{
                display: "inline-block",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "1px solid #000",
                marginRight: "10px",
                textAlign: "center",
                lineHeight: "18px",
                userSelect: "none",
              }}
            >
              <input
                type="checkbox"
                onChange={() => completeTask(task.id)}
                checked={task.completed}
                style={{ display: "none" }}
              />
              {task.completed && "✓"}
            </label>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
      <footer>
        <p>{taskCounter} tasks left</p>
        <p>MindX TodoList</p>
      </footer>
    </div>
  );
};

export default TaskList;
