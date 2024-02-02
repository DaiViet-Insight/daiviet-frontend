import React from "react";
import { useState } from "react";
import ReactQuill from 'react-quill';
import './CreatePost.css';
import 'react-quill/dist/quill.snow.css';
import { SearchBarEvent, EventAttach } from "../../components";

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

const events = [
    {
        id: 1,
        name: "Triều đại Hồng Bàng"
    },
    {
        id: 2,
        name: "Triều đại nhà Lý"
    },
    {
        id: 3,
        name: "Triều đại nhà Trần"
    },
    {
        id: 4,
        name: "Triều đại nhà Lê"
    }, 
    {
        id: 5,
        name: "Triều đại nhà Nguyễn"
    },
    {
        id: 6,
        name: "Triều đại nhà Tây Sơn"
    },
    {
        id: 7,
        name: "Triều đại nhà Mạc"
    },
    {
        id: 8,
        name: "Triều đại nhà Hồ"
    },
    {
        id: 9,
        name: "Triều đại nhà Tống"
    },
    {
        id: 10,
        name: "Triều đại nhà Minh"
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

    const handleRemoveEventAttach = (id) => {
        console.log("Remove event attach with id: " + id);
    }

    return (
        <div className="createPost">
            <div className="createPost-left">
                <div className="createPost-left__header">
                    <h1 className="createPost-left__header-heading">Tạo bài viết</h1>
                </div>
                <div className="createPost-left__body">
                    <div className="createPost-left__body-title">
                        <input 
                            type="text" 
                            placeholder="Tiêu đề" 
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="createPost-left__body-eventAttach">
                        {
                            events.map((event) => (
                                <EventAttach event={event} key={event.id} onRemoveClick={handleRemoveEventAttach} />
                            ))
                        }
                    </div>
                    <div className="createPost-left__body-content">
                        <ReactQuill 
                            theme="snow"
                            modules={modules}
                            className="createPost-left__body-content-editor"
                            placeholder="Nội dung"
                            onChange={setContent}
                        />
                    </div>
                    <div className="createPost-left__body-footer">
                        <button className="createPost-left__body-footer-btn" onClick={handleSubmitCreatePost}>Post</button>
                    </div>
                </div>
            </div>
            <div className="createPost-right">
                <SearchBarEvent events={events} />
            </div>
        </div>
    );
}

export default CreatePost;