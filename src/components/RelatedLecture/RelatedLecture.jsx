import React from "react";
import './RelatedLecture.css';

const RelatedLecture = ({ lecture }) => {
    return (
        <div className="relatedLecture">
            <img className="relatedLecture__thumbnail"
                src={lecture.thumbnail ? lecture.thumbnail : "https://via.placeholder.com/150"}
            ></img>
            <div className="relatedLecture__title">
                {lecture.title}
            </div>
        </div>
    );
};

export default RelatedLecture;