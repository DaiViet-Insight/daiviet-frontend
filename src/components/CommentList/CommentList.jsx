import React from "react";
import './CommentList.css';
import { CommentItem } from "../../components";

const CommentList = ({ comments }) => {
    return comments.map(comment => (
        <div key={comment.id} className="comment-stack">
            <CommentItem comment={{...comment}} />
        </div>
      ))
}

export default CommentList;