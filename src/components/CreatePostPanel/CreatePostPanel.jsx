import React from "react";
import { Link } from "react-router-dom";
import './CreatePostPanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import relatedImage from '../../assets/images/related_avatar.jpeg';

const CreatePostPanel = ({ user }) => {
    return (
        <div className="create-post-panel">
            <Link to="/profile" className="create-post-panel__link">
                <img src={ user ? user.avatar : relatedImage } alt="Profile" className="create-post-panel__profile-image" />
            </Link>
            <Link to="/posts/create" className="create-post-panel__link-input">
                <input className="create-post-panel__input" placeholder="Tạo bài viết" />
            </Link>
            <Link to="/posts/create" className="create-post-panel__link">
                <FontAwesomeIcon icon={faImage} className="create-post-panel__link-icon" />
            </Link>
            <Link to="/posts/create" className="create-post-panel__link">
                <FontAwesomeIcon icon={faLink} className="create-post-panel__link-icon" />
            </Link>
        </div>
    );
}

export default CreatePostPanel;