import React from "react";
import { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContext";
import './Blog.css';
import { BackToTopButton } from "../../components/Button";
import { CreatePostPanel, FilterPosts, QuickAccess ,TimeSlider} from "../../components";
import Post from "../containers/Post/Post";

const Blog = () => {
    const { setIsShowAuthModal, user } = useUser();
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState("new");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const filterQuery = filter ? `type=${filter}` : 'type=new';
                const response = await fetch(`http://20.236.83.109:3000/api/posts?${filterQuery}&size=10`, 
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    }
                );
                if (response.status === 401) {
                    setIsShowAuthModal(true);
                    return;
                }
                const data = await response.json();
                setPosts([]);
                if (data.length === 0) {
                    return;
                }
                data.forEach((item) => {
                    const post = {
                        id: item.id,
                        title: item.title,
                        subscription: item.content,
                        creationDate: item.createdAt,
                        fullname: item.User.fullname,
                        avatar: item.User.avatar,
                        voteCount: item.voteCount,
                        currentUserUpvoted: item.currentUserUpvoted,
                        currentUserDownvoted: item.currentUserDownvoted,
                    }
                    setPosts((posts) => [...posts, post]);
                });
            }
            catch (error) {
                console.log("error", error);
            }
        }
        fetchData();
    }, [filter]);

    const handleFilterPostsChange = (filter) => {
        setFilter(filter);
    }

    return (
        <div className="blog">
            <div className="blog-left">
                <CreatePostPanel user={user} />
                <FilterPosts type={filter} onFilterPostsChange={handleFilterPostsChange} />
                <div className="posts">
                    {posts.map((post) => (<Post key={post.id} post={post}/>))}
                </div>
            </div>
            <div className="blog-right">
                <QuickAccess />
            </div>
            <BackToTopButton />
        </div>
    );
};

export default Blog;