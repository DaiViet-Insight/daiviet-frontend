import React from "react";
import { Link } from "react-router-dom";
import './FilterPosts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faFire, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';

const FilterPosts = () => {
    return (
        <div className="filter-posts">
            <Link to="/posts?category=best" className="filter-posts-link">
                <FontAwesomeIcon icon={faRocket} className="filter-posts__link-icon" />
                Tốt nhất
            </Link>
            <Link to="/posts?category=hot" className="filter-posts-link">
                <FontAwesomeIcon icon={faFire} className="filter-posts__link-icon" />
                Nổi bật
            </Link>
            <Link to="/posts?category=new" className="filter-posts-link">
                <FontAwesomeIcon icon={faSun} className="filter-posts__link-icon" />
                Mới nhất
            </Link>
            <Link to="/posts?category=top" className="filter-posts-link">
                <FontAwesomeIcon icon={faRankingStar} />
                Dẫn đầu
            </Link>
        </div>
    );
}

export default FilterPosts;