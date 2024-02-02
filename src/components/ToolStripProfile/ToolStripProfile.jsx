import React from "react";
import { Link } from "react-router-dom";
import './ToolStripProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const { useUser } = require("../../contexts/UserContext");

const ToolStripProfile = ({ username , isShow, clickEvent }) => {
    const { logout } = useUser();

    const handleLogout = () => {
        logout();
    }

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
                        Thông tin cá nhân
                    </span>
                    <ul className="ToolStripProfile-item__subitem-list">
                        <Link to={"/profile/" + username} className="ToolStripProfile-item__subitem-link" onClick={clickEvent}>Cá nhân</Link>
                        <Link to="/settings" className="ToolStripProfile-item__subitem-link" onClick={clickEvent}>Cài đặt tài khoản</Link>
                    </ul>
                </li>
                <li>
                    <span className="ToolStripProfile-item__title" onClick={handleLogout} style={
                        {
                            cursor: "pointer"
                        }
                    }>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        Đăng xuất
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default ToolStripProfile;