import React from "react";
import './Post.css';
import { UpVoteButton, DownVoteButton, CommentButton , ShareButton, SavePostButton } from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
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
        <div className="post">
            <div className="post-left">
                <UpVoteButton upVote={handleUpVote} />
                <span className="post-votes">0</span>
                <DownVoteButton downVote={handleDownVote} />
            </div>
            <div className="post-right">
                <div className="post-header">
                    <span className="post-header-id" hidden>#{post.id}</span>
                    <span className="post-header-author">
                        <img src={post.avatar} className="post-header__author-avatar" alt="Author" />
                        <span className="post-header__author-username">{post.username}</span>
                    </span>
                    <span className="post-header-date">{post.creationDate}</span>
                </div>
                <div className="post-body">
                    <h2 className="post-body__title">{post.title}</h2>
                    <p className="post-body__subscription">{post.subscription}</p>
                </div>
                <div className="post-footer">
                    <CommentButton clickEvent={handleCommentBtnClick} />
                    <ShareButton />
                    <SavePostButton clickEvent={handleSavePostBtnClick} />
                </div>
            </div>
        </div>
    );
};

export default Post;