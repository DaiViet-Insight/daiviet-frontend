import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = ({ setIsPageNotFound }) => {
    useEffect(() => {
        // Set isPageNotFound to true when the NotFound component is mounted
        setIsPageNotFound(true);
    
        // Clean up the effect when the component is unmounted
        return () => {
          setIsPageNotFound(false);
        };
    }, [setIsPageNotFound]);

    return (
        <div className="notFound">
            <span className="notFound-code">404</span>
            <h1 className="notFound-title">Page Not Found</h1>
            <div className="notFound-action">
                <Link to="./posts" className="notFound-btn">Go Home</Link>
            </div>
        </div>
    );
}

export default NotFound;