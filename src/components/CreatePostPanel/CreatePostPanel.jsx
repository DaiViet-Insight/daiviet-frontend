import React from "react";
import { Link } from "react-router-dom";
import './CreatePostPanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const CreatePostPanel = () => {
    return (
        <div className="create-post-panel">
            <Link to="/profile" className="create-post-panel__link">
                <img src="https://www.redditstatic.com/avatars/avatar_default_19_FF8717.png" alt="Profile" className="create-post-panel__profile-image" />
            </Link>
            <Link to="/posts/create" className="create-post-panel__link-input">
                <input className="create-post-panel__input" placeholder="Create Post" />
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