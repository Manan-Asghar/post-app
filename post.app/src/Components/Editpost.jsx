import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Editpost = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const post = state?.data2;
  const [title, setTitle] = useState(post?.title ? post.title : "");
  const [body, setBody] = useState(post?.body ? post.body : "");
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [userId, setUserId] = useState(post?.userId ? post.userId : "");
  const [userIdError, setUserIdError] = useState("");

  const fetchData = (id) => {
    setLoading(true); // Set loading to true while fetching data
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setFetchedData(res.data);
      })
      .catch((error) => console.log(error.message))
      .finally(() => {
        setLoading(false); // Reset loading state once data is fetched
      });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleUserIdChange = (e) => {
    const value = e.target.value;
    if (value <= 0 || isNaN(value)) {
      setUserIdError("Please enter a positive number for User ID");
    } else {
      setUserIdError("");
    }
    setUserId(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true while updating post

    if (title.length < 5) {
      alert("Title must be at least 5 characters long");
      setLoading(false); // Reset loading state
      return;
    }

    // Validation for body length
    if (body.length > 500) {
      alert("Body can have maximum 500 characters");
      setLoading(false); // Reset loading state
      return;
    }

    if (userIdError) {
      alert("Please enter a valid User ID");
      setLoading(false);
      return;
    }

    const data = { title: title, body: body, userId: userId };
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // Reset loading state once post is updated
      });
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  useEffect(() => {
    if (fetchedData) {
      setTitle(fetchedData.title);
      setBody(fetchedData.body);
      setUserId(fetchedData.userId);
    }
  }, [fetchedData]);

  return (
    <div>
      <div className="container">
        <h1 className="text-center">Edit Post</h1>
        <form action="">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea
              className="form-control"
              rows="3"
              value={body}
              onChange={handleBodyChange}
            />
            <p>Your words: {body.length}</p>
          </div>
          <div className="mb-3">
            <label className="form-label">User ID</label>
            <input
              type="number"
              className="form-control"
              value={userId}
              onChange={handleUserIdChange}
            />
            {userIdError && <p style={{ color: "red" }}>{userIdError}</p>}
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            {loading ? "Updating..." : "Update"}
          </button>
          <Link to="/">
            <button className="btn btn-primary m-2">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Editpost;
