import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { EventAttach, SearchBarEvent , Loading} from "../../components";
import ReactQuill from 'react-quill';
import './LectureCreate.css';
import 'react-quill/dist/quill.snow.css';

import { useUser } from "../../contexts/UserContext";

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

const LectureCreate = () => {
    const reactQuillRef = useRef(null);
    const [loading, setLoading] = useState(false)
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

    const { setIsShowAuthModal } = useUser();
    const [events, setEvents] = useState([]);
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

    const handleRemoveEventAttach = (id) => {
        setEventAttach(eventAttach.filter((event) => event.id !== id));
    }

    const [title, setTitle] = useState("");
    const [videoURL, setVideoURL] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [content, setContent] = useState("");

    const handleSetThumbnail = async (event) => {
        const file = event.target.files[0];
        const imageUrl = await uploadToCloudinary(file);
        setThumbnail(imageUrl);
    }

    const handleSubmitLectureCreate = async () => {
        console.log("Create lecture");
        console.log("Title:" + title);
        console.log("Video URL:" + videoURL);
        console.log("Content:" + content);
        console.log("Event attach:" + eventAttach.map((event) => event.id));
        console.log("Thumbnail:" + thumbnail);

        if (!title || !videoURL || !content || !thumbnail) {
            alert("Vui lòng nhập đầy đủ thông tin");
            return;
        }

        const token = localStorage.getItem("token");
        if (!token) {
            setIsShowAuthModal(true);
            return;
        }
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API}/api/lectures`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        title: title,
                        videoURL: videoURL,
                        content: content,
                        eventIds: eventAttach.map((event) => event.id),
                        thumbnail: thumbnail
                    })
                });
                if (response.status === 201) {
                    setLoading(false);
                    window.location.href = "/daiviet/lectures";
                }

                const data = await response.json();
                console.log(data);
            }
            catch (error) {
                console.log("error", error);
            }
        }

        fetchData();
    };

    return (
        <div className="lectureCreate">
            {loading && <Loading />}
            <div className="lectureCreate-left">
                <div className="lectureCreate-left__header">
                    <h1 className="lectureCreate-left__header-heading">Tạo bài giảng</h1>
                </div>
                <div className="lectureCreate-left__body">
                    <div className="lectureCreate-left__body-title">
                        <input
                            type="text"
                            placeholder="Tiêu đề"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="lectureCreate-left__body-videoURL">
                        <input
                            type="text"
                            placeholder="Video bài giảng"
                            value={videoURL}
                            onChange={(e) => setVideoURL(e.target.value)}
                        />
                    </div>
                    <div className="lectureCreate-left__body-thumbnail">
                        <label htmlFor="thumbnail" className="lectureCreate-left__body-thumbnail-label">Thumbnail: </label>
                        <input type="file" accept="image/*" id="thumbnail" onChange={handleSetThumbnail} />
                    </div>
                    <div className="lectureCreate-left__body-eventAttach">
                        {
                            eventAttach.map((event) => (
                                <EventAttach event={event} key={event.id} onRemoveClick={handleRemoveEventAttach} />
                            ))
                        }
                    </div>
                    <div onPaste={clipboardHandler} className="lectureCreate-left__body-content">
                        <ReactQuill
                            ref={reactQuillRef}
                            theme="snow"
                            modules={modules}
                            formats={formats}
                            className="lectureCreate-left__body-content-editor"
                            placeholder="Nội dung"
                            onChange={setContent}
                            value={content}
                        />
                    </div>
                    <div className="lectureCreate-left__body-footer">
                        <button className="lectureCreate-left__body-footer-btn" onClick={handleSubmitLectureCreate}>Post</button>
                    </div>
                </div>
            </div>
            <div className="lectureCreate-right">
                <SearchBarEvent events={events} onClickAddEvent={handleAddEventAttach} />
            </div>
        </div>
    );
}

export default LectureCreate;