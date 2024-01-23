import React from "react";
import "./ShareButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";

const ShareButton = () => {
    return <button className="shareButton">
        <FontAwesomeIcon icon={faShareFromSquare} className="shareButton-icon" />
        <span className="shareButton-text">Share</span>
    </button>;
};

export default ShareButton;