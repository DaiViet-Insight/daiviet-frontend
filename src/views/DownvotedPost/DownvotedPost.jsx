import React from "react";
import { useState, useEffect } from "react";
import './DownvotedPost.css';
import { PostSkeleton, ProfilePanel } from '../../components';
import { PostPanel } from "../containers";

const { useUser } = require("../../contexts/UserContext");

const DownvotedPost = () => {
    const { setIsShowAuthModal } = useUser();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://20.236.83.109:3000/api/posts/downvotes", {
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
                    console.log("data", data);
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
                            <h2 className="downvoted-post__left-no-posts__title">hmm... Bạn chưa downvote bài viết nào</h2>
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