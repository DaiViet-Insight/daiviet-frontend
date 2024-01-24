import React from "react";
import { useState } from "react";
import ReactQuill from 'react-quill';
import './CommentInput.css';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }],
      [{ 'size': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { 'list': 'ordered' },
        { 'list': 'bullet' },
        { 'indent': '-1' },
        { 'indent': '+1' },
      ],
      ['link', 'image', 'video'],
    ],
  }

const CommentInput = ({ isReply = false, cancelClickEvent , replyClickEvent, commentClickEvent }) => {
    const [content, setContent] = useState("");

    const handleCancelClick = () => {
        cancelClickEvent();
    }

    const handleResetClick = () => {
        setContent("");
    }

    const handleReplyClick = () => {
        replyClickEvent(content);
        setContent("");
    }

    const handleCommentClick = () => {
        commentClickEvent(content);
        setContent("");
    }

    return <div className="commentInput">
        <div className="commentInput__body">
            <ReactQuill 
                theme="snow"
                modules={modules}
                className="commentInput__body-content-editor"
                placeholder="Nôi dung bình luận"
                onChange={setContent}
            />
            <div className="commentInput__body-actions">
                {
                    isReply === true ? 
                    <>
                        <button 
                            className="commentInput__body-actions-button commentInput__body-actions-button--cancel"
                            onClick={handleCancelClick}
                        >
                            Hủy
                        </button>
                        <button 
                            className="commentInput__body-actions-button commentInput__body-actions-button--reply"
                            onClick={handleReplyClick}
                        >
                            Phản hồi
                        </button>
                    </>
                    :
                    <>
                        <button 
                            className="commentInput__body-actions-button commentInput__body-actions-button--reset" 
                            onClick={handleResetClick}
                        >
                            Làm mới
                        </button>
                        <button 
                            className="commentInput__body-actions-button commentInput__body-actions-button--comment"
                            onClick={handleCommentClick}
                        >
                            Bình luận
                        </button>
                    </>
                }
                
                
            </div>
        </div>
    </div>;
};

export default CommentInput;