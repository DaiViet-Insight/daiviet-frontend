import React from "react";
import "./Approve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Approve = ({ clickEvent }) => {
    return <button className="commentButton" onClick={clickEvent}>
        <FontAwesomeIcon icon={faCheckCircle} />
        <span className="commentButton-text">Duyệt</span>
    </button>;
}

export default Approve;