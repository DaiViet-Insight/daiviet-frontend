import React from "react";
import './Post.css';
import { Approve ,Disapprove } from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {

    const handleDisapproveBtnClick = () => {
        console.log("Disapprove Button Clicked");
    }


    const handleApproveBtnClick = () => {
        console.log("Approve Button Clicked");
    }


    return (
        <div className="post">
            <div className="post-left">
            </div>
            <div className="post-right">
                <div className="post-header">
                    <span className="post-header-id" hidden>#{post.id}</span>
                    <span className="post-header-author">
                        <img src={post.avatar} className="post-header__author-avatar" alt="Author" />
                        <span className="post-header__author-username">{post.username}</span>
                    </span>
                    <span className="post-header-date">{post.creationDate}</span>
                </div>
                <div className="post-body">
                    <h2 className="post-body__title">{post.title}</h2>
                    <p className="post-body__subscription">{post.subscription}</p>
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