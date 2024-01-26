import React from "react";
import { useState, useCallback, useRef } from "react";
import ReactQuill from 'react-quill';
import './CreatePost.css';
import 'react-quill/dist/quill.snow.css';
import { FollowEvent } from "../containers";





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
const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("stream", file);
    formData.append('type', 'image')
    const res = await fetch(
        `${process.env.REACT_APP_API}/file/image`,
        { method: "POST", body: formData }
    );

    const data = await res.json();
    const url = data.imageUrl;
    return url
}



const CreatePost = () => {
    const reactQuillRef = useRef(null);
 


    const imageHandler = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
        const quill = reactQuillRef.current;
        if (quill) {
             const range = quill.getEditorSelection();
        input.onchange = async () => {
            if (input !== null && input.files !== null) {
                const file = input.files[0];
                const imageUrl = await uploadToCloudinary(file);
                range && quill.getEditor().insertEmbed(range.index, "image", imageUrl);
            }
        };
        };
    }, []);


    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const handleSubmitCreatePost = async () => {


        console.log("Create post");
        console.log("Title:" + title);
        console.log("Content:" + content);
        // Here, you would typically send the post data including the image URL to your server
    };



    const modules = {
        toolbar: {
            container: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                ],
                ["link", "image", "video"],
                ["code-block"],
                ["clean"],
            ],
            handlers: {
                image: imageHandler,
            }
        },
        clipboard: true,
    }
    const formats =
        [
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "video",
            "code-block",
        ]


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
                    <div className="createPost-left__body-content">
                        <ReactQuill
                            ref={reactQuillRef}
                            theme="snow"
                            modules={modules}
                            formats={formats}
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
                <select className="createPost-right__select">
                    {
                        lectures.map((lecture) => (
                            <option key={lecture.id} value={lecture.id} className="createPost-right__option">{lecture.name}</option>
                        ))
                    }
                </select>
                <FollowEvent />
            </div>
            <div className="createPost-left__body-footer">
                <button className="createPost-left__body-footer-btn" onClick={handleSubmitCreatePost}>Post</button>
            </div>
        </div>
    );
}


export default CreatePost;
