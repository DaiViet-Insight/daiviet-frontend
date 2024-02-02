import React from "react";
import './LectureItemThumb.css';

const LectureItemThumb = ({ lecture, onClick }) => {
    const handleOnClick = () => {
        onClick(lecture.id);
    }

    return (
        <div className="
        lecture-item-thumb"
        
        >
            <div className="lecture-item-thumb__image" onClick={handleOnClick}>
                <img src={lecture.thumbnail} alt={lecture.title} />
                <div className="lecture-item-thumb__image-opacity"></div>
                <div className="lecture-item-thumb__btn">Xem bài giảng</div>
            </div>
            <div className="lecture-item-thumb__main">
                <div className="lecture-item-thumb__title line-clamp line-2">{lecture.title}</div>
            </div>
        </div>
    );
}

export default LectureItemThumb;