import React from "react";
import { Link } from "react-router-dom";
import './FilterPosts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faFire, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';

const FilterPosts = ({ type, onFilterPostsChange }) => {
    const handleFilterPosts = (type) => {
        onFilterPostsChange(type);
    }

    return (
        <div className="filter-posts">
            <Link 
                to="/posts?type=best" 
                className={`filter-posts-link ${type === "best" ? "filter-posts-link--active" : ""}`}
                onClick={() => handleFilterPosts("best")}
            >
                <FontAwesomeIcon icon={faRocket} className="filter-posts__link-icon" />
                Tốt nhất
            </Link>
            <Link 
                to="/posts?type=hot" 
                className={`filter-posts-link ${type === "hot" ? "filter-posts-link--active" : ""}`}
                onClick={() => handleFilterPosts("hot")}
            >
                <FontAwesomeIcon icon={faFire} className="filter-posts__link-icon" />
                Nổi bật
            </Link>
            <Link 
                to="/posts?type=new" 
                className={`filter-posts-link ${type === "new" ? "filter-posts-link--active" : ""}`}
                onClick={() => handleFilterPosts("new")}
            >
                <FontAwesomeIcon icon={faSun} className="filter-posts__link-icon" />
                Mới nhất
            </Link>
            <Link 
                to="/posts?type=top" 
                className={`filter-posts-link ${type === "top" ? "filter-posts-link--active" : ""}`}
                onClick={() => handleFilterPosts("top")}
            >
                <FontAwesomeIcon icon={faRankingStar} />
                Dẫn đầu
            </Link>
        </div>
    );
}

export default FilterPosts;