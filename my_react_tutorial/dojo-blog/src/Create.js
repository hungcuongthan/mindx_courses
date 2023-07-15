import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    // console.log(blog);
    fetch("http://localhost:8000/blogs", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      alert(`New blog: "${title}" added!`);
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title: </label>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
            // console.log(title);
          }}
          type="text"
          name=""
          id=""
          required
          value={title}
        />
        <label>Blog content: </label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
            // console.log(title);
          }}
        >
          {"Blog content here!"}
        </textarea>
        <label>Blog author: </label>
        <select
          name="author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog ... </button>}
      </form>
    </div>
  );
};

export default Create;
