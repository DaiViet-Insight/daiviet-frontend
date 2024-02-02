import React from "react";
import { useState } from "react";
import { usePost } from "../../contexts/PostContext";
import './CommentItem.css';
import { UpVoteButton, DownVoteButton } from "../Button";
import CommentInput from "../CommentInput/CommentInput";
import CommentList from "../CommentList/CommentList";

const CommentItem = ({ comment }) => {
    const [isReplying, setIsReplying] = useState(false)
    const { getReplies } = usePost();

    const handleUpVote = () => {
        console.log("upvote");
    }

    const handleDownVote = () => {
        console.log("downvote");
    }

    const childComments = getReplies(comment.id);

    const handleSubmitCommentReply = (content) => {
        setIsReplying(!isReplying);
        console.log(content);
    }

    return (
        <div className="comment-list__item" key={comment.id}>
            <div className="comment-list__item-left">
                <div className="comment-list__item-left-author">
                    <img src={comment.avatar} className="comment-list__item-header__author-avatar" alt="Author" />
                </div>
            </div>
            <div className="comment-list__item-right">
                <div className="comment-list__item-header">
                    <span className="comment-list__item-header__author-username">{comment.username}</span>
                    <span className="comment-list__item-header-date">{comment.createdAt}</span>
                </div>
                <div className="comment-list__item-body">
                    <p className="comment-list__item-body__content">{comment.content}</p>
                </div>
                <div className="comment-list__item-footer">
                    <UpVoteButton upVote={handleUpVote} />
                    <span className="comment-list__item-votes">{comment.votes}</span>
                    <DownVoteButton downVote={handleDownVote} />
                    <div className="comment-list__item-reply">
                        <button className="comment-list__item-reply-btn" onClick={() => setIsReplying(!isReplying)}>Reply</button>
                    </div>
                </div>
                {
                    isReplying && (
                        <CommentInput 
                            isReply={true} 
                            cancelClickEvent={() => setIsReplying(!isReplying)}
                            replyClickEvent={handleSubmitCommentReply} 
                        />
                    )
                }
                {
                    childComments?.length > 0 && (
                        <CommentList comments={childComments} />
                    )
                }
            </div>
        </div>
    );
};

export default CommentItem;