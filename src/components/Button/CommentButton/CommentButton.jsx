import React from "react";
import "./CommentButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const CommentButton = ({ clickEvent }) => {
    return <button className="commentButton" onClick={clickEvent}>
        <FontAwesomeIcon icon={faMessage} />
        <span className="commentButton-text">Comment</span>
    </button>;
}

export default CommentButton;