import React from "react";
import { useNavigate } from "react-router-dom";
import './CommentHeader.css';
import { UpVoteButton, DownVoteButton, CloseButton } from "../Button";

const CommentHeader = ({ post, onUpvotePost, onDownvotePost, voteCount, currentUserUpvoted, currentUserDownvoted }) => {
    const navigate = useNavigate();
    const handleUpVote = () => {
        onUpvotePost(post.id);
    }

    const handleDownVote = () => {
        onDownvotePost(post.id);
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
                currentUserUpvoted={currentUserUpvoted}
            />
            <span className="comment-post-votes">{voteCount}</span>
            <DownVoteButton 
                props={
                    {
                        strokeColor: "#878A8C",
                        hoverBackColor: "transparent"
                    }
                } 
                downVote={handleDownVote}
                currentUserDownvoted={currentUserDownvoted}
            />
        </div>
        <h2 className="comment-post-title">10x Stronger Than Kevlar: Amorphous Silicon Carbide Could Revolutionize </h2>
        <CloseButton clickEvent={handleCloseBtn} />
    </div>;
}

export default CommentHeader;