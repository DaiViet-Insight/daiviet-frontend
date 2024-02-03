import React, { useEffect } from "react";
import { useState, useCallback, useRef } from "react";
import ReactQuill from 'react-quill';
import './CreatePost.css';
import 'react-quill/dist/quill.snow.css';
import { SearchBarEvent, EventAttach, Loading } from "../../components";

import { useUser } from "../../contexts/UserContext";

const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("stream", file);
    formData.append('type', 'image')
    const res = await fetch(
        `${process.env.REACT_APP_API}/file/image`,
        { method: "POST", body: formData }
    );
    console.log(res)
    console.log(`${process.env.REACT_APP_API}/file/image`)
    const data = await res.json();
    const url = data.imageUrl;
    return url
}

const CreatePost = () => {
    const { setIsShowAuthModal } = useUser();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://20.236.83.109:3000/api/events");
                const data = await response.json();
                let events = data.map((event) => {
                    return {
                        id: event.id,
                        name: event.content
                    }
                });
                setEvents(events);
            }
            catch (error) {
                console.log("error", error);
            }
        }
        fetchData();
    }, []);

    const [eventAttach, setEventAttach] = useState([]);

    const handleAddEventAttach = (event) => {
        if (eventAttach.find((e) => e.id === event.id)) {
            return;
        }
        setEventAttach([...eventAttach, event]);
    }

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
                        const imageUrl = await uploadToCloudinary(file);
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
        console.log("Event attach:" + eventAttach.map((event) => event.id));
        const json = JSON.stringify({
            title: title,
            content: content,
            eventIds: eventAttach.map((event) => event.id)
        });
        console.log(json);
        // Here, you would typically send the post data including the image URL to your server
        try {
            setLoading(true);
            const response = await fetch("http://20.236.83.109:3000/api/posts/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify({
                    title: title,
                    content: content,
                    eventIds: eventAttach.map((event) => event.id)
                })
            });
            if (response.status === 200) {
                console.log("abc")
                setLoading(false);
                window.location.href = "/daiviet/posts";
                return;
            }

            if (response.status === 401) {
                setIsShowAuthModal(true);
                return;
            }
            if (response.status === 500) {
                alert("Server error");
                setLoading(false);
                return;
            }
        } catch (error) {
            console.log("error", error);
        }


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
        setEventAttach(eventAttach.filter((event) => event.id !== id));
    }

    return (
        <div>
            {loading && <Loading />}

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
                                eventAttach.map((event) => (
                                    <EventAttach event={event} key={event.id} onRemoveClick={handleRemoveEventAttach} />
                                ))
                            }
                        </div>
                        <div onPaste={clipboardHandler} className="createPost-left__body-content">
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
                    <SearchBarEvent events={events} onClickAddEvent={handleAddEventAttach} />
                </div>
            </div>
        </div>
    );
}


export default CreatePost;
