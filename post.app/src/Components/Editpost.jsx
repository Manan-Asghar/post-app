import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Editpost = () => {
  const { state } = useLocation();
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
            <label className="form-label">
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
            <label className="form-label">
              Body
            </label>
            <textarea
              type="text"
              className="form-control"
              rows = '3'
              value={body}
              onChange={handleBodyChange}
            />
            <label className="form-label">User ID</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Update
          </button>
          <Link to='/'><button className="btn btn-primary m-2">
          Back
        </button></Link>
        </form>
      </div>
    </div>
  );
};

export default Editpost;
