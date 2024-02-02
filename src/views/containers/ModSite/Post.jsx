import React from "react";
import './Post.css';
import { Approve ,Disapprove } from "../../../components/Button";

const Post = ({ post, onRemovePostInList }) => {

    const handleDisapproveBtnClick = () => {
        const disapprovePost = async () => {
            const response = await fetch(`${process.env.REACT_APP_API}/api/posts/${post.id}/reject`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                });
            if (!response.ok) {
                return;
            } else {
                alert("Post disapproved");
                onRemovePostInList(post.id);
            }
        }

        disapprovePost();
    }


    const handleApproveBtnClick = () => {
        const approvePost = async () => {
            const response = await fetch(`${process.env.REACT_APP_API}/api/posts/${post.id}/accept`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                });
            if (!response.ok) {
                return;
            } else {
                alert("Post approved");
                onRemovePostInList(post.id);
            }
        }

        approvePost();
    }


    return (
        <div className="post">
            <div className="post-left">
            </div>
            <div className="post-right">
                <div className="post-header">
                    <span className="post-header-id" hidden>#{post.id}</span>
                    <span className="post-header-author">
                        <img src={post.User?.avatar} className="post-header__author-avatar" alt="Author" />
                        <span className="post-header__author-username">{post.User?.fullname}</span>
                    </span>
                    <span className="post-header-date">{post.createdAt}</span>
                </div>
                <div className="post-body">
                    <h2 className="post-body__title">{post.title}</h2>
                    <p className="post-body__subscription"
                        dangerouslySetInnerHTML={{ __html: post.content }}>
                    </p>
                </div>
                <div className="post-footer">
                    <Approve clickEvent={handleApproveBtnClick} />
                    <Disapprove clickEvent={handleDisapproveBtnClick} />
                </div>
            </div>
        </div>
    );
};

export default Post;