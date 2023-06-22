import { useEffect } from "react";

const Category = (props) => {
  return (
    <div>
      <button className="category">{props.name}</button>
    </div>
  );
};

export default Category;
