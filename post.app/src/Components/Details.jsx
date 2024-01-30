import React from "react";
import { useLocation } from "react-router";

export default function Details() {
  const location = useLocation();
  const post = location.state.data2;
  return (
    <>
      <div className="container">
        <div className="card mb-3" key={post.id}>
          <div className="card-body">
            <h3 className="card-title">{post.title}</h3>
            <p className="card-text text-black">{post.body}</p>
            <p className="card-text text-black">{post.id}</p>
          </div>
        </div>
      </div>
    </>
  );
}