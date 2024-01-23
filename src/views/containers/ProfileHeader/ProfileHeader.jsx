import React from "react";
import { Link } from "react-router-dom";
import './ProfileHeader.css';

const ProfileHeader = ({ profile }) => {
    const rootPath = "/profile/" + profile.username;

    const handleActiveLink = (e) => {
        const links = document.querySelectorAll(".profileHeader__menuItem-link");
        if (!links) return;
        links.forEach(link => {
            link.classList.remove("profileHeader__menuItem-link--active");
        });
        e.target.classList.add("profileHeader__menuItem-link--active");
    }

    return (
        <div className="profileHeader">
            <ul className="profileHeader__menu">
            <li className="profileHeader__menuItem">
                    <Link 
                        to={rootPath + ""} 
                        className="profileHeader__menuItem-link profileHeader__menuItem-link--active"
                        onClick={handleActiveLink}
                    >
                        Overview
                    </Link>
                </li>
                <li className="profileHeader__menuItem">
                    <Link 
                        to={rootPath + "/saved"} 
                        className="profileHeader__menuItem-link"
                        onClick={handleActiveLink}
                    >
                        Saved
                    </Link>
                </li>
                <li className="profileHeader__menuItem">
                    <Link 
                        to={rootPath + "/upvoted"} 
                        className="profileHeader__menuItem-link"
                        onClick={handleActiveLink}
                    >
                        Upvoted
                    </Link>
                </li>
                <li className="profileHeader__menuItem">
                    <Link 
                        to={rootPath + "/downvoted"} 
                        className="profileHeader__menuItem-link"
                        onClick={handleActiveLink}
                    >
                        Downvoted
                    </Link>
                </li>
                <li className="profileHeader__menuItem">
                    <Link 
                        to={rootPath + "/notifications"} 
                        className="profileHeader__menuItem-link"
                        onClick={handleActiveLink}
                    >
                        Notifications
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ProfileHeader;