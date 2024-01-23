import React from "react";
import './UpvotedPost.css';
import { PostSkeleton, ProfilePanel } from '../../components';
import { PostPanel } from '../containers';

const posts = [];

const UpvotedPost = () => {
    return (
        <div className="upvoted-post">
            <div className="upvoted-post__container">
                <div className="upvoted-post__left">
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
                        <div className="upvoted-post__left-no-posts">
                            <h2 className="upvoted-post__left-no-posts__title">hmm... looks like you haven't upvoted anything yet</h2>
                        </div>
                    }
                </div>
                <div className="upvoted-post__right">
                    <ProfilePanel />
                </div>
            </div>
        </div>
    )
}

export default UpvotedPost;