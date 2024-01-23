import React from "react";
import { useParams } from "react-router-dom";
import {data} from './Data' 


const Details = () => {
    const { id } = useParams();
    const description = data.find((e) => e.id === parseInt(id));

    if (!description) {
        // Handle case when no matching post is found
        return <div>No matching post found</div>;
    }

    return (
        <>
            <div className="container">
                <div className="card mb-3" key={description.id}>
                    <div className="card-body">
                        <h3 className="card-title">{description.title}</h3>
                        <p className="card-text text-black">{description.body}</p>
                        <p className="card-text text-black">{description.id}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
