import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Addpost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, body, userId };

    axios.post(`{process.env.REACT_APP_API_HOST}`, data)
      .then((response) => {
        setSuccessMessage("Post submitted successfully!");
        console.log(response.data);        
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Failed to submit post.");
      })
      .finally(()=>{
        e.target.reset()
      })
  };

  return (
    <div>
      <form className="container addPost" onSubmit={handleSubmit}>
        <h1 className="text-center">Add Post</h1>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">User ID</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to='/'><button className="btn btn-primary m-2">
          Back
        </button></Link>
      </form>
    </div>
  );
};

export default Addpost;
