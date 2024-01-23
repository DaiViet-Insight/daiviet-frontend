import React from "react";
import './CloseButton.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CloseButton = ({ clickEvent }) => {
    return <button className="close-button" onClick={clickEvent}>
        <FontAwesomeIcon icon={faXmark} className="close-button__icon" />
        <span>Close</span>
    </button>;
}

export default CloseButton;