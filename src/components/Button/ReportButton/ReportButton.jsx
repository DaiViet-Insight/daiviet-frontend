import React from "react";
import "./ReportButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

const ReportButton = ({ clickEvent }) => {
    return <button className="commentButton" onClick={clickEvent}>
        <FontAwesomeIcon icon={faXmarkCircle} />
        <span className="commentButton-text">Báo cáo vi phạm</span>
    </button>;
}

export default ReportButton;