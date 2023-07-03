import React from "react";

const SearchFilter = ({ handleFilterChange }) => {
  return (
    <input
      type="text"
      onChange={(e) => handleFilterChange(e.target.value)}
      placeholder="Search or filter"
    />
  );
};

export default SearchFilter;
