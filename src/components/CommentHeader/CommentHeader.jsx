import React from "react";
import { useNavigate } from "react-router-dom";
import './CommentHeader.css';
import { UpVoteButton, DownVoteButton, CloseButton } from "../Button";

const CommentHeader = ({ post }) => {
    const navigate = useNavigate();
    const handleUpVote = () => {
        console.log("upvote");
    }

    const handleDownVote = () => {
        console.log("downvote");
    }

    const handleCloseBtn = () => {
        navigate("/posts");
    }

    return <div className="comment-header">
        <div className="comment-post-vote">
            <UpVoteButton 
                props={
                    {
                        strokeColor: "#878A8C",
                        hoverBackColor: "transparent"
                    }
                }
                upVote={handleUpVote}
            />
            <span className="comment-post-votes">{post.voteCount}</span>
            <DownVoteButton 
                props={
                    {
                        strokeColor: "#878A8C",
                        hoverBackColor: "transparent"
                    }
                } 
                downVote={handleDownVote}
            />
        </div>
        <h2 className="comment-post-title">{post.title}</h2>
        <CloseButton clickEvent={handleCloseBtn} />
    </div>;
}

export default CommentHeader;