import React from "react";
import "./Disapprove.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

const Disapprove = ({ clickEvent }) => {
    return <button className="commentButton" onClick={clickEvent}>
        <FontAwesomeIcon icon={faXmarkCircle} />
        <span className="commentButton-text">Từ Chối</span>
    </button>;
}

export default Disapprove;