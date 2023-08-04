import React, { useState, useEffect } from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import ToDoFilter from "./components/ToDoFilter";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos")) || []
  );
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToDo = (task) => {
    setTodos([{ task, complete: false }, ...todos]);
  };

  const toggleComplete = (i) => {
    setTodos(
      todos.map((todo, k) =>
        k === i ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const deleteToDo = (i) => {
    setTodos(todos.filter((todo, k) => k !== i));
  };

  const getVisibleToDos = () => {
    if (filter === "ALL") {
      return todos;
    } else if (filter === "ACTIVE") {
      return todos.filter((todo) => !todo.complete);
    } else if (filter === "COMPLETED") {
      return todos.filter((todo) => todo.complete);
    }
  };

  return (
    <div className="container mt-3 d-flex justify-content-center flex-column align-items-center">
      <h1 className="mb-3">To Do List</h1>
      <div className="w-60">
        <ToDoFilter setFilter={setFilter} />
        <ToDoForm addToDo={addToDo} />
        <ToDoList
          todos={getVisibleToDos()}
          toggleComplete={toggleComplete}
          deleteToDo={deleteToDo}
        />
      </div>
    </div>
  );
};

export default App;
