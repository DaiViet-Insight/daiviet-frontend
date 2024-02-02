import React from "react";
import { Link } from "react-router-dom";
import './RelatedLecture.css';

const RelatedLecture = ({ lecture }) => {
    return (
        <Link to={`/lectures/${lecture.id}`}>
            <div className="relatedLecture">
                <img className="relatedLecture__thumbnail"
                    src={lecture.thumbnail ? lecture.thumbnail : "https://via.placeholder.com/150"}
                ></img>
                <div className="relatedLecture__title">
                    {lecture.title}
                </div>
            </div>
        </Link>
    );
};

export default RelatedLecture;