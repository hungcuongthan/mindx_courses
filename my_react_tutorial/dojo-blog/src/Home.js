import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((e) => {
          setError(e.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);

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
