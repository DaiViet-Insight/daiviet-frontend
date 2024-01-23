import React from "react";
import  { UpVoteButton, DownVoteButton } from "../Button";
import './PostSkeleton.css';

const PostSkeleton = () => {
    return (
        <div className="post-skeleton">
            <div className="post-skeleton__left">
                <UpVoteButton upVote={() => {}} />
                <DownVoteButton downVote={() => {}} />
            </div>
            <div className="post-skeleton__body"></div>
        </div>
    );
}

export default PostSkeleton;