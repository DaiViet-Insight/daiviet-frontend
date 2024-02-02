import React from "react";
import './ModSite.css';
import Post from "../containers/ModSite/Post";

const { useUser } = require("../../contexts/UserContext");

const ModSite = () => {
    const { setIsShowAuthModal } = useUser();
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${process.env.REACT_APP_API}/api/posts/unapproved`,
                {
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

            if (!response.ok) {
                return;
            }
            const data = await response.json();
            setPosts(data);
        };
        
        fetchPosts();
    }, []);

    const handleRemovePostInList = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    }

    return (
        <div className="blog">
            <div className="blog-left">
                <div className="posts">
                    {posts.map((post) => (<Post key={post.id} post={post} onRemovePostInList={handleRemovePostInList}/>))}
                </div>
            </div>
            <div className="blog-right">
                {/* <QuickAccess /> */}
                {/* add somethings */}
            </div>
        </div>
    );
};

export default ModSite;