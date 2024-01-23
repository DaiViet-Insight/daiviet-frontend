import React from "react";
import "./SavePostButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const SavePostButton = ({ clickEvent }) => {
    return <button className="savePostButton" onClick={clickEvent} >
        <FontAwesomeIcon icon={faBookmark} />
        <span className="savePostButton-text">Save</span>
    </button>;
};

export default SavePostButton;