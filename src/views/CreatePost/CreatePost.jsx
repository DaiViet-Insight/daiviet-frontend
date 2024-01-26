import React from "react";
import { useState, useCallback, useRef } from "react";
import ReactQuill from 'react-quill';
import './CreatePost.css';
import 'react-quill/dist/quill.snow.css';
import { SearchBarEvent, EventAttach } from "../../components";

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
    
    const clipboardHandler = useCallback(async (e) => {
    //handle paste image
    //if image is pasted delete the current selection and insert the image
    
    const clipboardData = e.clipboardData;
    if (clipboardData) {
        const items = clipboardData.items;
        if (!items) return;
        for (const item of items) {
            if (item.type.indexOf("image") !== -1) {
                e.preventDefault();
                const file = item.getAsFile();
                if (file) {
                    const imageUrl = await  uploadToCloudinary(file);
                    const quill = reactQuillRef.current;
                    if (quill) {
                        const range = quill.getEditorSelection();
                        range && quill.getEditor().insertEmbed(range.index, "image", imageUrl);
                    }
                }
            }
        }
    }
      
    }, []);

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
                    <div onPaste = {clipboardHandler} className="createPost-left__body-content">
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
                <SearchBarEvent events={events} />
            </div>
        </div>
    );
}


export default CreatePost;
