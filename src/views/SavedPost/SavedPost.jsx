import React from "react";
import './SavedPost.css';
import { PostSkeleton, ProfilePanel } from "../../components";
import { PostPanel } from "../containers";

const posts = [];

const SavedPost = () => {
    return (
        <div className="saved-post">
            <div className="saved-post__container">
                <div className="saved-post__left">
                    {
                        posts.length > 0?
                            posts.map((post) => (
                                <PostPanel key={post.id} />
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
                            <div className="saved-post__left-no-posts">
                                <h2 className="saved-post__left-no-posts__title">hmm... looks like you haven't saved anything yet</h2>
                            </div>
                    }
                </div>
                <div className="saved-post__right">
                    <ProfilePanel />
                </div>
            </div>
        </div>
    )
}

export default SavedPost;