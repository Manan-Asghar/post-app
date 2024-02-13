import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Addpost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [userIdError, setUserIdError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when form is submitted

    if (title.length < 5) {
      setTitleError("Title must be at least 5 characters long");
      setLoading(false); // Reset loading state
      return;
    } else {
      setTitleError(""); // Reset title error if valid
    }

    // Validation for body length
    if (body.length > 500) {
      setBodyError("Body can have maximum 500 characters");
      setLoading(false); // Reset loading state
      return;
    } else {
      setBodyError(""); // Reset body error if valid
    }

    // Validation for userId being a positive number
    const userIdNumber = Number(userId);
    if (!userId || userIdNumber <= 0 || isNaN(userIdNumber)) {
      setUserIdError("Please enter a positive number for User ID");
      setLoading(false); // Reset loading state
      return;
    } else {
      setUserIdError(""); // Reset userId error if valid
    }

    // Form submission
    const data = { title: title, body: body, userId: userIdNumber };

    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", data);
      setSuccessMessage("Post submitted successfully!");
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to submit post.");
    } finally {
      setLoading(false); // Reset loading state
      e.target.reset();
    }
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="text-center">Add Post</h1>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {loading && <p>Loading...</p>}
        {!loading && (
          <>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              {titleError && <p style={{ color: "red" }}>{titleError}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Body</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setBody(e.target.value)}
                required
              />
              <p>Your words {body.length}</p>
              {bodyError && <p style={{ color: "red" }}>{bodyError}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">User ID</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => setUserId(e.target.value)}
                required
              />
              {userIdError && <p style={{ color: "red" }}>{userIdError}</p>}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to="/">
              <button className="btn btn-primary m-2">Back</button>
            </Link>
          </>
        )}
      </form>
    </div>
  );
};

export default Addpost;
