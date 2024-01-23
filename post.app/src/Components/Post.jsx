import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post, onDelete }) => {
    return (
        <div className="card mb-3" key={post.id}>
            <div className="card-body">
                <h3 className="card-title">{post.title} </h3>
                <p className="card-text text-black">{post.body}...</p>
                <Link to={`/details/${post.id}`} className="btn btn-success">
                                Read More
                            </Link>
                <button
                    className="btn btn-secondary ms-2"
                    onClick={() => onDelete(post.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Post;
