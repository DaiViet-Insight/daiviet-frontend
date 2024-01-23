import React from "react";
import './DownvotedPost.css';
import { PostSkeleton, ProfilePanel } from '../../components';
import { PostPanel } from "../containers";

const posts = [];

const DownvotedPost = () => {
    return (
        <div className="downvoted-post">
            <div className="downvoted-post__container">
                <div className="downvoted-post__left">
                    {
                        posts.length > 0?
                            posts.map((post) => (
                                <PostPanel key={post.id} post={post} />
                            ))
                        :
                            [...Array(10)].map((_, index) => (
                                <PostSkeleton key={index} />
                            ))
                    }
                    {
                        posts.length > 0?
                            null
                        :
                        <div className="downvoted-post__left-no-posts">
                            <h2 className="downvoted-post__left-no-posts__title">hmm... looks like you haven't downvoted anything yet</h2>
                        </div>
                    }
                </div>
                <div className="downvoted-post__right">
                    <ProfilePanel />
                </div>
            </div>
        </div>
    )
}

export default DownvotedPost;