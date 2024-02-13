import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export default function Details() {
  const location = useLocation();
  const post = location.state.data2;
  const [postDetails, setPostDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
      .then((response) => {
        setPostDetails (response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [post.id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
      <div className="container">
        <div className="card mb-3" key={postDetails.id}>
          <div className="card-body">
            <h3 className="card-title">{postDetails.title}</h3>
            <p className="card-text text-black">{postDetails.body}</p>
            <p className="card-text text-black">Post ID: {postDetails.id}</p>
          </div>
        </div>
        <Link to="/">
            <button className="btn btn-primary m-2">Back</button>
          </Link>
      </div>
    </>
  );
}
