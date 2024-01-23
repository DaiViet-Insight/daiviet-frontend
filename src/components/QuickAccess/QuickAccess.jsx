import React from "react";
import { Link } from "react-router-dom";
import './QuickAccess.css';
import Flag from "../../assets/images/Flag-map_of_Vietnam.png";

const QuickAccess = () => {
    return (
        <div className="quick-access">
            <div className="quick-access__background"></div>
            <div className="quick-access__content">
                <div className="quick-access__content__title">
                    <img src={Flag} alt="" className="quick-access__content-flag" />
                    Home
                </div>
                <div className="quick-access__content__subtitle">
                    Your personal Reddit frontpage. Come here to check in with your favorite communities.
                </div>
            </div>
            <div className="quick-access__links">
                <Link to="./posts/create" className="quick-access__link quick-access__link-createPost">Create Post</Link>
                <Link to="./createCommunity" className="quick-access__link quick-access__link-createCommunity">Create Community</Link>
            </div>
        </div>
    );
}

export default QuickAccess;