import React from "react";
import { Link } from "react-router-dom";
import './ToolStripProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const ToolStripProfile = ({ username , isShow, clickEvent }) => {
    return (
        <div className="ToolStripProfile" style={
            {
                display: isShow ? "block" : "none"
            }
        }>
            <ul className="ToolStripProfile-list">
                <li className="ToolStripProfile-item">
                    <span className="ToolStripProfile-item__title">
                        <FontAwesomeIcon icon={faCircleUser} />
                        My Stuff
                    </span>
                    <ul className="ToolStripProfile-item__subitem-list">
                        <Link to={"/profile/" + username} className="ToolStripProfile-item__subitem-link" onClick={clickEvent}>Profile</Link>
                        <Link to="/settings" className="ToolStripProfile-item__subitem-link" onClick={clickEvent}>User Settings</Link>
                    </ul>
                </li>
                <li>
                    <Link to="/logout" className="ToolStripProfile-item__title" onClick={clickEvent}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default ToolStripProfile;