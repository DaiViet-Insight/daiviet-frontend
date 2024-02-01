import React, { useEffect } from "react";
import { useState } from "react";
import './Comment.css';
import { usePost } from "../../contexts/PostContext"
import { CommentHeader } from "../../components";
import { CommentMain, FollowEvent } from "../containers";
import { BackToTopButton } from "../../components/Button";

const { useUser } = require("../../contexts/UserContext");

const Comment = () => {
    const { setIsShowAuthModal } = useUser();
    const { post, rootComments } = usePost();
    const [currentUserUpvoted, setCurrentUserUpvoted] = useState(post.currentUserUpvoted);
    const [currentUserDownvoted, setCurrentUserDownvoted] = useState(post.currentUserDownvoted);
    const [voteCount, setVoteCount] = useState(post.voteCount ?? 0);

    useEffect(() => {
        setVoteCount(post.voteCount ?? 0);
        setCurrentUserUpvoted(post.currentUserUpvoted);
        setCurrentUserDownvoted(post.currentUserDownvoted);
    }, [post]);

    const handleUpvotePost = (postId) => {
        const upVote = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API}/api/posts/${postId}/upvote`, {
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
    }

    const handleDownvotePost = (postId) => {
        const downVote = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API}/api/posts/${postId}/downvote`, {
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

    return <div className="comments">
        <div className="comment-container">
            <CommentHeader 
                post={post} 
                onUpvotePost={handleUpvotePost} 
                onDownvotePost={handleDownvotePost}
                voteCount={voteCount}
                currentUserUpvoted={currentUserUpvoted}
                currentUserDownvoted={currentUserDownvoted}
            />
            <div className="comment-body">
                <CommentMain 
                    post={post} 
                    rootComments={rootComments} 
                    onUpvotePost={handleUpvotePost} 
                    onDownvotePost={handleDownvotePost}
                    voteCount={voteCount}
                    currentUserUpvoted={currentUserUpvoted}
                    currentUserDownvoted={currentUserDownvoted}
                />
                <FollowEvent />
            </div>
        </div>
        <BackToTopButton />
    </div>;
};

export default Comment;