import React from "react";
import './Comment.css';
import { usePost } from "../../contexts/PostContext"
import { CommentHeader } from "../../components";
import { CommentMain, FollowEvent } from "../containers";
import { BackToTopButton } from "../../components/Button";

const Comment = () => {
    const { post, rootComments, createLocalComment } = usePost()

    return <div className="comments">
        <div className="comment-container">
            <CommentHeader post={post} />
            <div className="comment-body">
                <CommentMain post={post} rootComments={rootComments} />
                <FollowEvent />
            </div>
        </div>
        <BackToTopButton />
    </div>;
};

export default Comment;