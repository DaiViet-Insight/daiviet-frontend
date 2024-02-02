import React from "react";
import './RelatedLecture.css';

const RelatedLecture = ({ lecture }) => {
    return (
        <div className="relatedLecture">
            <iframe className="relatedLecture__iframe"
                title="relatedLecture"
                src={lecture.videoUrl}
                frameborder="0"
                allowfullscreen
            ></iframe>
            <div className="relatedLecture__title">
                {lecture.title}
            </div>
        </div>
    );
};

export default RelatedLecture;