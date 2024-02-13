import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PostData() {
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(false); // Added loading state
  const [confirm, setConfirm] = useState(false);
  const [error, setISerror] = useState("");
  const [postdelete, setPostdelete] = useState(null);
  const [start, setStart] = useState(0); // Start index for pagination
  const [limit, setLimit] = useState(10); // Limit for pagination

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: start, // Starting index for pagination
          _limit: limit, // Number of items to fetch for pagination
        },
      })
      .then((res) => {
        setData2(res.data);
      })
      .catch((error) => {
        setISerror(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [start, limit]); // Fetch data when start or limit changes

  const deleteCard = (id) => {
    setLoading(true)
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => console.log(res, "result"))
      .catch((error) => setISerror(error.message))
      .finally(()=>{
        setLoading(false)
      })
    const newData = data2.filter((current) => current.id !== id);

    setData2(newData);
    setPostdelete(null);
  };

  const confirmMessage = (id) => {
    setConfirm(true);
    setPostdelete(id);
  };

  const hideConfirmMessage = () => {
    setConfirm(false);
    setPostdelete(null);
  };

  const handleNext = () => {
    setStart(0); // Reset start index to 0
    setLimit(limit + 10); // Increase limit by 10
    setLoading(false);
  };

  // const handleprevious = () => {
  //   setStart(start - limit); // Increase start index to fetch next page
  // };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container main-card">
      {error !== "" && <h2>{error}</h2>}
      <Link to="/addpost">
        <button className="btn btn-primary mb-3">Add Post</button>
      </Link>

      {data2.map((post) => (
        <div key={post.id}>
          <div className="card mb-3" key={post.id}>
            <div className="card-body">
              <h3 className="card-title">
                {post.id}- {post.title}{" "}
              </h3>
              <p className="card-text text-black">{post.body}...</p>
              <Link to={`/details/${post.id}`} state={{ data2: post }}>
                <button className="btn btn-success">Details</button>
              </Link>
              <button
                className="btn btn-danger ms-2 delete-btn"
                onClick={() => {
                  confirmMessage(post.id);
                }}
              >
                Delete
              </button>
              <Link to={`/edit/${post.id}`} state={{ data2: post }}>
                <button className="btn btn-dark ms-2">Edit</button>
              </Link>
            </div>
          </div>
          {confirm && postdelete === post.id && (
            <div className="mb-2">
              <strong>Are you sure ?</strong>
              <button
                className="btn btn-danger ms-2"
                onClick={() => deleteCard(post.id)}
              >
                Yes
              </button>
              <button
                className="btn btn-success ms-2"
                onClick={() => hideConfirmMessage()}
              >
                No
              </button>
            </div>
          )}
        </div>
      ))}
      {/* <button className="btn btn-primary m-3" onClick={handleprevious}>
      Previous
      </button> */}
      <button className="btn btn-primary m-3" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
