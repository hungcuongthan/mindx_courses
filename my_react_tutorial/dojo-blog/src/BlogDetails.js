import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDeleteBlog = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Is loading ... </div>}
      {error && <div>{error}</div>}
      {blog && (
        <div>
          <h1>{blog.title}</h1>
          <h2>{`Written by: ${blog.author}`}</h2>
          <div>{`Content: ${blog.body}`}</div>
          <button onClick={handleDeleteBlog}>Delete blog!</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
