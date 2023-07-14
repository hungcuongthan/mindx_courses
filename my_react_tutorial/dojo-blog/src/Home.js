import React from "react";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  const [name, setName] = useState("mario");

  //   const handleDeleteClick = (id) => {
  //     setBlogs(blogs.filter((blog) => blog.id !== id));
  //   };

  // useEffect runs after every render
  // we need to add dependency array to limit when the useEffect should run
  // if the list of dependency is empty then the useEffect will only run once after loading the page
  useEffect(() => {
    console.log("abc123");
  }, [name]);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All blogs"
          //   handleDeleteClick={handleDeleteClick}
        />
      )}

      {error && <h2>Current error: {error}</h2>}

      <h2>{name}</h2>
      <button className="btn" onClick={() => setName("Luigi")}>
        Change Name
      </button>
    </div>
  );
};

export default Home;
