import React from "react";
import { Link } from "react-router-dom";
import './ProfilePanel.css';

const ProfilePanel = () => {
    return (
    <div className="profile-panel">
        <div className="profile-panel__avatar">
            <img className="profile-panel__avatar-img" src="https://picsum.photos/200" alt="avatar" />
        </div>
        <div className="profile-panel__info">
            <div className="profile-panel__name">Tuan Tran</div>
            <div className="profile-panel__username">u/tuantran</div>
            <div className="profile-panel__birthday">
                <span className="profile-panel__birthday-title">Birthday:</span>
                <span className="profile-panel__birthday-value">01/01/2003</span>
            </div>
            <div className="profile-panel__actions">
                <Link to="/profile/settings" className="profile-panel__button">
                    Edit profile
                </Link>
                <Link to="../../posts/create" className="profile-panel__button">
                    New Post
                </Link>
            </div>
        </div>
    </div>
    )
}

export default ProfilePanel;