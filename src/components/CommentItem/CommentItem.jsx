import React from "react";
import { useState } from "react";
import { usePost } from "../../contexts/PostContext";
import './CommentItem.css';
import { UpVoteButton, DownVoteButton } from "../Button";
import CommentInput from "../CommentInput/CommentInput";
import CommentList from "../CommentList/CommentList";
import { useAsyncFn } from "../../hooks/useAsync.js";
import { createComment } from "../../services/comments.js";

const CommentItem = ({ comment }) => {
    const [isReplying, setIsReplying] = useState(false)
    const { getReplies, createLocalComment } = usePost();

    const handleUpVote = () => {
        console.log("upvote");
    }

    const handleDownVote = () => {
        console.log("downvote");
    }

    const childComments = getReplies(comment.id);

    const createCommentFn = useAsyncFn(createComment);

    const handleSubmitCommentReply = (content) => {
        return createCommentFn
            .execute({ postId: comment.postId, content, parentId: comment.id })
            .then(result => {
                setIsReplying(false)
                if (result === "Tạo comment thành công !!!") {
                    createLocalComment({
                        parentId: comment.id,
                        currentUserDownvoted: false,
                        currentUserUpvoted: false,
                        downvotesCount: 0,
                        fullname: "Tran Tuan",
                        content: content,
                        ...comment,
                    })
                }
            })
    }

    return (
        <div className="comment-list__item" key={comment.id}>
            <div className="comment-list__item-left">
                <div className="comment-list__item-left-author">
                    <img src={comment.User?.avatar} className="comment-list__item-header__author-avatar" alt="Author" />
                </div>
            </div>
            <div className="comment-list__item-right">
                <div className="comment-list__item-header">
                    <span className="comment-list__item-header__author-username">{comment.fullname}</span>
                    <span className="comment-list__item-header-date">{comment.createdAt}</span>
                </div>
                <div className="comment-list__item-body">
                    <p className="comment-list__item-body__content"
                        dangerouslySetInnerHTML={{ __html: comment.content }}
                    ></p>
                </div>
                <div className="comment-list__item-footer">
                    <UpVoteButton upVote={handleUpVote} />
                    <span className="comment-list__item-votes">{comment.voteCount}</span>
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