import React from "react";
import { useState, useEffect } from "react";
import './SavedPost.css';
import { PostSkeleton, ProfilePanel } from "../../components";
import { PostPanel } from "../containers";

const { useUser } = require("../../contexts/UserContext");

const SavedPost = () => {
    const { setIsShowAuthModal } = useUser();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://20.236.83.109:3000/api/posts/saves", {
                    method: "GET",
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
                    const data = await response.json();
                    setPosts(data);
                }
            }
            catch (error) {
                console.log("error", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="saved-post">
            <div className="saved-post__container">
                <div className="saved-post__left">
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