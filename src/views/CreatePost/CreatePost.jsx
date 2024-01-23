import React from "react";
import { useState } from "react";
import ReactQuill from 'react-quill';
import './CreatePost.css';
import 'react-quill/dist/quill.snow.css';
import { FollowLecture } from "../containers";

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

const lectures = [
    {
        id: 1,
        name: "Chiến thắng Điện Biên Phủ 1954"
    },
    {
        id: 2,
        name: "Lecture 2"
    },
    {
        id: 3,
        name: "Lecture 3"
    }
];

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmitCreatePost = () => {
        console.log("Create post");
        console.log("Title:" + title);
        console.log("Content:" + content);
    }

    return (
        <div className="createPost">
            <div className="createPost-left">
                <div className="createPost-left__header">
                    <h1 className="createPost-left__header-heading">Create a post</h1>
                </div>
                <div className="createPost-left__body">
                    <div className="createPost-left__body-title">
                        <input 
                            type="text" 
                            placeholder="Title" 
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="createPost-left__body-content">
                        <ReactQuill 
                            theme="snow"
                            modules={modules}
                            className="createPost-left__body-content-editor"
                            placeholder="Content"
                            onChange={setContent}
                        />
                    </div>
                    <div className="createPost-left__body-footer">
                        <button className="createPost-left__body-footer-btn" onClick={handleSubmitCreatePost}>Post</button>
                    </div>
                </div>
            </div>
            <div className="createPost-right">
                <select className="createPost-right__select">
                    {
                        lectures.map((lecture) => (
                            <option key={lecture.id} value={lecture.id} className="createPost-right__option">{lecture.name}</option>
                        ))
                    }
                </select>
                <FollowLecture />
            </div>
        </div>
    );
}

export default CreatePost;