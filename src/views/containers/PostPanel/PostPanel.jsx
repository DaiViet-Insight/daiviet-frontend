import React from "react";
import { useNavigate } from "react-router-dom";
import './PostPanel.css';
import { UpVoteButton, DownVoteButton, CommentButton, ShareButton, SavePostButton } from "../../../components/Button";

const PostPanel = ({ post }) => {
    const navigate = useNavigate();

    const handleUpVote = () => {
        console.log("Up Vote");
    };

    const handleDownVote = () => {
        console.log("Down Vote");
    }

    const handleCommentBtnClick = () => {
        navigate("/comments/" + post.id);
    }

    const handleSavePostBtnClick = () => {
        console.log("Save Post Button Clicked");
    }

    return (
        <div className="post-panel">
            <div className="post-panel-left">
                <UpVoteButton upVote={handleUpVote} />
                <span className="post-panel-votes">0</span>
                <DownVoteButton downVote={handleDownVote} />
            </div>
            <div className="post-panel-right">
                <div className="post-panel-header">
                    <span className="post-panel-header-id" hidden>#{post.id}</span>
                    <span className="post-panel-header-author">
                        <img src={post.avatar} className="post-panel-header__author-avatar" alt="Author" />
                        <span className="post-panel-header__author-username">{post.username}</span>
                    </span>
                    <span className="post-panel-header-date">{post.creationDate}</span>
                </div>
                <div className="post-panel-body">
                    <h2 className="post-panel-body__title">{post.title}</h2>
                </div>
                <div className="post-panel-footer">
                    <CommentButton clickEvent={handleCommentBtnClick} />
                    <ShareButton />
                    <SavePostButton clickEvent={handleSavePostBtnClick} />
                </div>
            </div>
        </div>
    )
}

export default PostPanel;