import React from "react";
import { Link } from "react-router-dom";
import './ToolStripProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const { useUser } = require("../../contexts/UserContext");

const ToolStripProfile = ({ username , isShow, clickEvent }) => {
    const { logout, user, setIsShowAuthModal } = useUser();

    const handleLogout = () => {
        logout();
    }

    const handleLogin = () => {
        setIsShowAuthModal(true);
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
                        {
                            user && (user.role === "moderator" || user.role === "admin" ) ? <Link to="/mod" className="ToolStripProfile-item__subitem-link" onClick={clickEvent}>Duyệt bài viết</Link> : null
                        }
                        {
                            user && (user.role === "moderator" || user.role === "admin" ) ? <Link to="/posts/reported" className="ToolStripProfile-item__subitem-link" onClick={clickEvent}>Bài viết vi phạm</Link> : null
                        }
                        {
                            user && (user.role === "contributor" || user.role === "admin" ) ? <Link to="/lectures/create" className="ToolStripProfile-item__subitem-link" onClick={clickEvent}>Tạo bài giảng</Link> : null
                        }
                    </ul>
                </li>
                <li>
                    {
                        user ? (
                            <span className="ToolStripProfile-item__title" onClick={handleLogout} style={
                                {
                                    cursor: "pointer"
                                }
                            }>
                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                Đăng xuất
                            </span>
                        ) : (
                            <span className="ToolStripProfile-item__title" onClick={handleLogin} style={
                                {
                                    cursor: "pointer"
                                }
                            }>
                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                Đăng nhập
                            </span>
                        )
                    }
                    
                </li>
            </ul>
        </div>
    );
}

export default ToolStripProfile;