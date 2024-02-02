import React from "react";
import './CommentMain.css';
import { UpVoteButton, DownVoteButton, CommentButton, SavePostButton } from "../../../components/Button";
import { CommentInput, CommentList } from "../../../components";
import { useAsyncFn } from "../../../hooks/useAsync.js";
import { createComment } from "../../../services/comments.js";

const { usePost } = require("../../../contexts/PostContext");

const CommentMain = ({ post, rootComments, onUpvotePost, onDownvotePost, voteCount, currentUserUpvoted, currentUserDownvoted }) => {
    const { createLocalComment } = usePost();
    const handleUpVote = () => {
        onUpvotePost(post.id);
    }

    const handleDownVote = () => {
        onDownvotePost(post.id);
    }

    const handleCommentBtnClick = () => {
        console.log("comment");
    }

    const handleSavePostBtnClick = () => {
        console.log("save");
    }

    const createCommentFn = useAsyncFn(createComment);

    const handleSubmitComment = (content) => {
        return createCommentFn
            .execute({ postId: post.id, content, parentId: null })
            .then(result => {
                if (result === "Tạo comment thành công !!!") {
                    createLocalComment({
                        parentId: post.id,
                        currentUserDownvoted: false,
                        currentUserUpvoted: false,
                        downvotesCount: 0,
                        fullname: "Tran Tuan",
                        content: content,
                    })
                }
            })
    }

    return (
        <div className="comment-main">
            <div className="comment-main-border">
                <div className="comment-main__top">
                    <div className="comment-main__left">
                        <UpVoteButton upVote={handleUpVote} currentUserUpvoted={currentUserUpvoted} />
                        <span className="comment-main__votes">{voteCount}</span>
                        <DownVoteButton downVote={handleDownVote} currentUserDownvoted={currentUserDownvoted} />
                    </div>
                    <div className="comment-main__right">
                        <div className="post-header">
                            <span className="post-header-id" hidden>{post.id}</span>
                            <span className="post-header-author">
                                <img src={post.avatar} className="post-header__author-avatar" alt="Author" />
                                <span className="post-header__author-username">{post.username}</span>
                            </span>
                            <span className="post-header-date">{post.createdAt}</span>
                        </div>
                        <div className="post-body">
                            <h2 className="post-body__title">{post.title}</h2>
                            <p className="post-body__subscription">{post.content}</p>
                        </div>
                        <div className="post-footer">
                            <CommentButton clickEvent={handleCommentBtnClick} />
                            <SavePostButton clickEvent={handleSavePostBtnClick} />
                        </div>

                        <div className="comment-main__bottom">
                            <span className="comment-main__bottom-text">Bình luận như là {"Tuanne"}</span>
                            {/* Comment input */}
                            <CommentInput isReply={false} commentClickEvent={handleSubmitComment} />
                        </div>
                    </div>
                </div>
                <div className="comment-list">
                    {/*comments.map(comment => (
                        <div className="comment-list__item" key={comment.id}>
                            <div className="comment-list__item-left">
                                <div className="comment-list__item-left-author">
                                    <img src={comment.avatar} className="comment-list__item-header__author-avatar" alt="Author" />
                                </div>
                            </div>
                            <div className="comment-list__item-right">
                                <div className="comment-list__item-header">
                                    <span className="comment-list__item-header__author-username">{comment.username}</span>
                                    <span className="comment-list__item-header-date">{comment.creationDate}</span>
                                </div>
                                <div className="comment-list__item-body">
                                    <p className="comment-list__item-body__content">{comment.content}</p>
                                </div>
                                <div className="comment-list__item-footer">
                                    <UpVoteButton upVote={handleUpVote} />
                                    <span className="comment-list__item-votes">{comment.votes}</span>
                                    <DownVoteButton downVote={handleDownVote} />
                                </div>
                            </div>
                        </div>
                    ))*/
                        rootComments != null && rootComments.length > 0 && (
                            <CommentList comments={rootComments} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default CommentMain;