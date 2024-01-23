import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../../../assets/images/Reddit-Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { ToolStripProfile } from "../../../components";
import { NotificationPanel } from "../../containers";

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);

    const handleToolStripProfileClick = () => {
        setIsShow(!isShow);
    }

    window.onclick = (event) => {
        // ToolStrip Profile
        const navbarProfile = document.querySelector(".navbar-profile");
        const navbarProfileToolStrip = document.querySelector(".navbar-profile__toolStrip");
    
        if (navbarProfileToolStrip && navbarProfileToolStrip.contains(event.target)) {
            // click inside
        } else if (navbarProfile && navbarProfile.contains(event.target)) {
            // click inside
            setIsShow(!isShow);
        } else {
            // click outside
            setIsShow(false);
        }

        // Notification Panel
        const navbarItemNotification = document.querySelector(".navbar-item__notification");
        const navbarItemNotificationPanel = document.querySelector(".navbar-item__notification-panel");
    
        if (navbarItemNotificationPanel && navbarItemNotificationPanel.contains(event.target)) {
            // click inside
        } else if (navbarItemNotification && navbarItemNotification.contains(event.target)) {
            // click inside
            setIsShowNotificationPanel(!isShowNotificationPanel);
        } else {
            // click outside
            setIsShowNotificationPanel(false);
        }
    };

    const [isShowNotificationPanel, setIsShowNotificationPanel] = useState(false);

    const handleNotificationPanelClick = () => {
        setIsShowNotificationPanel(!isShowNotificationPanel);
    }

    return (
        <div className="navbar">
            <Link to="/posts" className="navbar-logo-link">
                <img src={logo} alt="logo" className="navbar-logo" />
            </Link>
            <div className="navbar-search-form">
                <label htmlFor="navbar-search" className="navbar-search__label">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-search-label__icon" />
                </label>
                <input type="text" id="navbar-search" className="navbar-search__input" placeholder="Search Reddit" />
            </div>
            <ul className="navbar-list">
                <li className="navbar-item navbar-item__notification">
                    <button className="navbar-item__link">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg>
                    </button>
                    <div className="navbar-item__notification-panel">
                        <NotificationPanel 
                            isShow={isShowNotificationPanel} 
                            clickEvent={handleNotificationPanelClick} 
                        />
                    </div>
                </li>
                <li className="navbar-item">
                    <Link to="/posts/create" className="navbar-item__link">
                        <svg id="evqk9MwIJV11" className="navbar-tem__icon" viewBox="0 0 100 100" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                            <line x1="-50" y1="0" x2="50" y2="0" transform="translate(50 50)" fill="none" stroke="rgb(26, 26, 27)" strokeWidth="5"/>
                            <line x1="0" y1="-50" x2="0" y2="50" transform="translate(50 50)" fill="none" stroke="rgb(26, 26, 27)" strokeWidth="5"/>
                        </svg>
                    </Link>
                </li>
            </ul>
            <div className="navbar-profile">
                <div className="navbar-profile__avatar">
                    <img src="https://www.redditstatic.com/avatars/avatar_default_19_FF8717.png" alt="avatar" className="navbar-profile-avatar__img" />
                </div>
                <div className="navbar-profile__info">
                    <span className="navbar-profile-info__name">u/username</span>
                    <span className="navbar-profile-info__karma">Karma: 0</span>
                </div>
                <FontAwesomeIcon icon={faAngleDown} className="navbar-profile__icon" />
                <div className="navbar-profile__toolStrip">
                    <ToolStripProfile username={"tuanne"} isShow={isShow} clickEvent={handleToolStripProfileClick} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;