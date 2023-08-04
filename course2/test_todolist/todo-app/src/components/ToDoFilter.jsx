import React, { useState } from "react";

const ToDoFilter = ({ setFilter }) => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const handleFilterChange = (filter) => {
    setFilter(filter);
    setActiveFilter(filter);
  };

  return (
    <div className="d-flex w-100 mb-3">
      <button
        className={`btn flex-grow-1 filter-button ${
          activeFilter === "ALL" ? "active" : ""
        }`}
        onClick={() => handleFilterChange("ALL")}
      >
        All
      </button>
      <button
        className={`btn flex-grow-1 filter-button ${
          activeFilter === "ACTIVE" ? "active" : ""
        }`}
        onClick={() => handleFilterChange("ACTIVE")}
      >
        Active
      </button>
      <button
        className={`btn flex-grow-1 filter-button ${
          activeFilter === "COMPLETED" ? "active" : ""
        }`}
        onClick={() => handleFilterChange("COMPLETED")}
      >
        Completed
      </button>
    </div>
  );
};

export default ToDoFilter;
