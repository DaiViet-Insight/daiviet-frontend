import React from "react";
import { useState } from "react";
import './Post.css';
import { UpVoteButton, DownVoteButton, CommentButton, SavePostButton } from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const { useUser } = require("../../../contexts/UserContext"); 

const Post = ({ post }) => {
    const navigate = useNavigate();
    const { setIsShowAuthModal } = useUser();
    const [currentUserUpvoted, setCurrentUserUpvoted] = useState(post.currentUserUpvoted);
    const [currentUserDownvoted, setCurrentUserDownvoted] = useState(post.currentUserDownvoted);
    const [voteCount, setVoteCount] = useState(post.voteCount ?? 0);

    const handleUpVote = () => {
        const upVote = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API}/api/posts/${post.id}/upvote`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                });

                if (response.status === 401) {
                    setIsShowAuthModal(true);
                    return;
                }

                if (response.status === 200) {
                    if (currentUserUpvoted) {
                        setVoteCount(voteCount - 1);
                    } else {
                        if (currentUserDownvoted) {
                            setVoteCount(voteCount + 2);
                        } else {
                            setVoteCount(voteCount + 1);
                        }
                    }
                    setCurrentUserUpvoted(!currentUserUpvoted);
                    setCurrentUserDownvoted(false);
                }
            }
            catch (error) {
                console.log("error", error);
            }
        }

        upVote();
    };

    const handleDownVote = () => {
        const downVote = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API}/api/posts/${post.id}/downvote`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                });

                if (response.status === 401) {
                    setIsShowAuthModal(true);
                    return;
                }

                if (response.status === 200) {
                    if (currentUserDownvoted) {
                        setVoteCount(voteCount + 1);
                    } else {
                        if (currentUserUpvoted) {
                            setVoteCount(voteCount - 2);
                        } else {
                            setVoteCount(voteCount - 1);
                        }
                    }
                    setCurrentUserDownvoted(!currentUserDownvoted);
                    setCurrentUserUpvoted(false);
                }
            }
            catch (error) {
                console.log("error", error);
            }
        }

        downVote();
    }

    const handleCommentBtnClick = () => {
        navigate(`${post.id}/comments`);
    }

    const handleSavePostBtnClick = () => {
        console.log("Save Post Button Clicked");
    }

    return (
        <div className="post">
            <div className="post-left">
                <UpVoteButton upVote={handleUpVote} currentUserUpvoted={currentUserUpvoted} />
                <span className="post-votes">{voteCount}</span>
                <DownVoteButton downVote={handleDownVote} currentUserDownvoted={currentUserDownvoted} />
            </div>
            <div className="post-right">
                <div className="post-header">
                    <span className="post-header-id" hidden>#{post.id}</span>
                    <span className="post-header-author">
                        <img src={post.avatar} className="post-header__author-avatar" alt="Author" />
                        <span className="post-header__author-username">{post.fullname}</span>
                    </span>
                    <span className="post-header-date">{post.creationDate}</span>
                </div>
                <div className="post-body">
                    <h2 className="post-body__title">{post.title}</h2>
                    <p className="post-body__subscription"
                        dangerouslySetInnerHTML={{ __html: post.subscription }}
                    ></p>
                </div>
                <div className="post-footer">
                    <CommentButton clickEvent={handleCommentBtnClick} />
                    <SavePostButton clickEvent={handleSavePostBtnClick} />
                </div>
            </div>
        </div>
    );
};

export default Post;