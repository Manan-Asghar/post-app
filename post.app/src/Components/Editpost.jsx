import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Editpost = () => {
  const { state } = useLocation();
  console.log(useLocation(), "location");
  const post = state?.data2;
  const [title, setTitle] = useState(post?.title ? post.title : "");
  const [body, setBody] = useState(post?.body ? post.body : "");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title: title, body: body };
    console.log(data);
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Edit Post</h1>
        <form action="">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Body
            </label>
            <input
              type="text"
              className="form-control"
              value={body}
              onChange={handleBodyChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Editpost;
